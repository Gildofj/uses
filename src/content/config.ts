import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional().nullable(),
    tags: z.string().array().optional(),
    videos: z.string().array().optional(),
  }),
});

export const collections = { posts };
