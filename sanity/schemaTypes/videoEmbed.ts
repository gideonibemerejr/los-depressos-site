import { defineType, defineField } from "sanity";

export const videoEmbedType = defineType({
	name: "videoEmbed",
	title: "Video Embed",
	type: "object",
	fields: [
		defineField({
			name: "url",
			title: "Video Embed Link",
			type: "url",
		}),
	],
	preview: {
		select: {
			title: "url",
		},
	},
});
