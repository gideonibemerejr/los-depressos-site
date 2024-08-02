import { defineField, defineType } from "sanity";

export default defineType({
	name: "gearList",
	title: "Gear List",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
		}),
		defineField({
			name: "description",
			type: "blockContent",
		}),
		defineField({
			name: "image",
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
			name: "serialNumber",
			type: "string",
		}),
		defineField({
			name: "category",
			type: "reference",
			to: [{ type: "gearItemType" }],
		}),
	],
	preview: {
		select: {
			title: "name",
		},
	},
});
