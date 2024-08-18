"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio-admin/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

const singletonTypes = new Set(["home", "contact"]);

export default defineConfig({
	basePath: "/studio-admin",
	projectId,
	dataset,
	// Add and edit the content schema in the './sanity/schema' folder
	schema: {
		types: schema.types,
		templates: (templates) =>
			templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
	},
	document: {
		// For singleton types, filter out actions that are not explicitly included
		// in the `singletonActions` list defined above
		actions: (input, context) =>
			singletonTypes.has(context.schemaType)
				? input.filter(({ action }) => action && singletonActions.has(action))
				: input,
	},
	plugins: [
		structureTool({
			structure: (S) =>
				S.list()
					.title("Content")
					.items([
						S.listItem()
							.title("Home Page")
							.id("home")
							.child(S.document().schemaType("home").documentId("home")),
						// S.listItem()
						// 	.title("Contact Page")
						// 	.id("contact")
						// 	.child(S.document().schemaType("contact").documentId("contact")),
						S.divider(),

						S.documentTypeListItem("gearList").title("Gear List"),
						S.documentTypeListItem("gearItemType").title("Gear Category"),
						S.documentTypeListItem("services").title("Services"),
						// S.documentTypeListItem("studio").title("Studio"),
					]),
		}),
		// Vision is a tool that lets you query your content with GROQ in the studio
		// https://www.sanity.io/docs/the-vision-plugin
		visionTool({ defaultApiVersion: apiVersion }),
		presentationTool({
			previewUrl: {
				draftMode: {
					enable: "/api/draft-mode/enable",
				},
			},
		}),
	],
});
