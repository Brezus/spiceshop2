import { createClient } from "next-sanity"
import ImageUrlBuilder from "@sanity/image-url"
import { SanityClient } from "next-sanity"

export const client = createClient({
  projectId: "gkm1ektq",
  dataset: "production",
  apiVersion: "2022-10-18",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
