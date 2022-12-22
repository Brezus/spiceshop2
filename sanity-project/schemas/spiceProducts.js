export default {
  name: "spiceProducts",
  type: "document",
  title: "SpiceProducts",
  fields: [
    {
      name: "image",
      type: "array",
      title: "Image",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      name: "detailsLong",
      title: "DetailsLong",
      type: "string",
    },
    {
      name: "winterSpice",
      title: "WinterSpice",
      type: "boolean",
    },
  ],
}
