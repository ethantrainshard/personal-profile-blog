import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    techStack: z.array(z.string()),
    techColors: z.array(z.string()),
    overview: z.string(),
    features: z.array(z.string()),
    role: z.string(),
    githubUrl: z.string().url().or(z.null()),
    liveUrl: z.string().url().or(z.null()).default(null),
  }),
});

export const collections = { blog, projects };
