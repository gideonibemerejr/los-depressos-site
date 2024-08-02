import { defineField, defineType } from "sanity";

export const aboutType = defineType({
	name: "about",
	type: "object",
	title: "About",
	fields: [
		defineField({
			name: "title",
			type: "string",
		}),
		defineField({
			name: "description",
			type: "blockContent",
		}),
	],
});
