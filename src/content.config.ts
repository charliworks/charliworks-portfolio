import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pitch: z.string().max(120),
      order: z.number(),
      year: z.number().int(),
      cover: image(),
      coverAlt: z.string().min(1),
      repo: z.url(),
      stack: z.array(z.string()),
      draft: z.boolean().default(false),
    }),
});

export const collections = { work };
