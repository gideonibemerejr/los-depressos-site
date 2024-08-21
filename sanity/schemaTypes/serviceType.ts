import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  type: "object",
  title: "Service",
  fields: [
    defineField({
      name: "title",
      type: "string",
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
      name: "description",
      type: "blockContent",
    }),
  ],
});
