import { defineField, defineType } from "sanity";

export const galleryType = defineType({
  name: "gallery",
  type: "document",
  title: "Gallery",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "blockContent",
    }),
    defineField({
      name: "images",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
});
