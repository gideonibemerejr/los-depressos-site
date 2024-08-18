import { defineType, defineField } from "sanity";

export const linkType = defineType({
	name: "link",
	title: "Link",
	type: "object",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "url",
			title: "URL",
			type: "url",
		}),
	],
});
