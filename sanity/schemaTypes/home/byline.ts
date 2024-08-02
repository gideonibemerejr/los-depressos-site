import { defineField, defineType } from "sanity";

export const byline = defineType({
	name: "byline",
	type: "object",
	title: "Byline Block",
	fields: [
		defineField({
			name: "logo",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative Text",
				},
			],
		}),
		defineField({
			name: "text",
			type: "string",
		}),
		defineField({
			name: "callToAction",
			type: "object",
			fields: [
				defineField({
					name: "text",
					type: "string",
				}),
				defineField({
					name: "link",
					type: "string",
					description: "The page in the site to link users to i.e. /about",
				}),
			],
		}),
		defineField({
			name: "Links",
			type: "array",
			of: [
				{
					name: "page",
					type: "object",
					fields: [
						defineField({
							name: "text",
							type: "string",
						}),
						defineField({
							name: "link",
							type: "string",
							description: "The page in the site to link users to i.e. /about",
						}),
					],
				},
			],
		}),
	],
});
