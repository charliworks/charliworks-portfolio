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
      /** A looping clip that replaces the cover on the parcel (muted). */
      video: z
        .object({
          src: z.string().startsWith('/'),
          poster: z.string().startsWith('/'),
          width: z.number().int(),
          height: z.number().int(),
          /** What happens in the clip, for screen readers. */
          label: z.string().min(1),
          /** A portrait cut for screens under 600px, where the wide clip's
              text would be too small to read. */
          phone: z
            .object({
              src: z.string().startsWith('/'),
              poster: z.string().startsWith('/'),
              width: z.number().int(),
              height: z.number().int(),
            })
            .optional(),
        })
        .optional(),
      /** Release history, from the project's GitHub releases (PHT dates). */
      releases: z
        .array(
          z.object({
            version: z.string(),
            date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
            note: z.string().max(90),
          }),
        )
        .default([]),
    }),
});

export const collections = { work };
