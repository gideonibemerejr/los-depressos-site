import { defineField, defineType } from "sanity";

export default defineType({
	name: "gearItemType",
	type: "document",
	title: "Gear Category",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
		}),
		defineField({
			name: "icon",
			title: "Icon",
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
	],
});
