import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date().optional(),
    genre: z.string().default('Creative writing'),
    excerpt: z.string().optional(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().int().optional(),
    readTimeMinutes: z.number().int().positive().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { stories };
