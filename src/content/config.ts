import { defineCollection, z } from 'astro:content';

// Define the schema for the blog collection
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    excerpt: z.string(),
    image: z.string().optional(),
    author: z.string().default('Ronit Kapur'),
    tags: z.array(z.string()).default([]),
  }),
});

// Export the collections
export const collections = {
  'blog': blogCollection,
}; 