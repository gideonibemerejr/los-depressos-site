import { defineField, defineType, defineArrayMember } from "sanity";

export const homeType = defineType({
	name: "home",
	title: "Home Page",
	type: "document",
	fields: [
		defineField({
			name: "pageBuilder",
			title: "Page Builder",
			type: "array",
			of: [
				defineArrayMember({
					name: "carousel",
					title: "Carousel",
					type: "imageGallery",
				}),
				defineArrayMember({
					name: "byline",
					title: "Byline Content",
					type: "byline",
				}),
				defineArrayMember({
					name: "images",
					title: "Gallery",
					type: "imageGallery",
				}),
			],
		}),
	],
});
