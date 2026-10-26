import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Essays: handwritten on iPad → transcribed by learning-pipeline → edited in Obsidian (this folder is the vault).
// Only status: published entries are built. `project` is the slug of the project that proves the idea.
const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    status: z.enum(['draft', 'published']).default('draft'),
    topic: z.string().optional(),
    summary: z.string().optional(),
    project: z.string().nullable().optional(),
    source: z.string().optional(),
  }),
});

// Projects: one per essay (ideally). `essay` is the slug of the essay it grew out of.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['building', 'done', 'client', 'coming']).default('building'),
    summary: z.string(),
    stack: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    essay: z.string().nullable().optional(),
    order: z.number().default(100),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { essays, projects };
