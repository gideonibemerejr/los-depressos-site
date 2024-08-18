import { defineField, defineType } from "sanity";

export const servicesType = defineType({
	name: "services",
	type: "document",
	title: "Services",
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
