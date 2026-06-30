import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    techStack: z.array(
      z.object({
        name: z.string(),
        color: z.string(),
      }),
    ),
    images: z.array(z.string()),
    featured: z.boolean(),
    liveUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    role: z.string(),
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        }),
      )
      .optional(),
    duration: z.string(),
    stars: z.number().optional(),
    commits: z.number().optional(),
  }),
});

export const collections = { projects };
