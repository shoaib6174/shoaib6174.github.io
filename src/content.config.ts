import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({ label: z.string(), href: z.string() });
const dateStr = z.string().regex(/^\d{4}(-\d{2})?$/, 'date must be YYYY or YYYY-MM');

export const AREAS = ['robots', 'llm', 'ml', 'infra', 'quantum', 'product'] as const;
export const PHRASES = ['ai', 'platforms', 'operations', 'supply', 'people', 'other'] as const;
export const ROLES = ['build', 'explain', 'organise'] as const;
export const THREADS = ['build', 'explain', 'organise', 'studied', 'life'] as const;
export const STATUSES = [
  'running', 'shipped', 'paper-in-preparation', 'waiting-for-funding', 'planned', 'concept', 'closed',
] as const;

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        years: z.string(),
        area: z.enum(AREAS),
        role: z.enum(ROLES),
        status: z.enum(STATUSES),
        summary: z.string(),
        why: z.string(),
        stack: z.array(z.string()).default([]),
        links: z.array(link).default([]),
        ledTo: z.string().optional(),
        featured: z.boolean().default(false),
        order: z.number().default(100),
        cover: image().optional(),
        coverAlt: z.string().optional(),
        coverSlot: z.string().optional(),
      })
      .refine((d) => d.links.length > 0 || ['concept', 'planned'].includes(d.status), {
        message: 'a work item needs at least one link unless its status is concept or planned',
      }),
});

const journey = defineCollection({
  loader: glob({ base: './src/content/journey', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      date: dateStr,
      title: z.string(),
      until: z.string().regex(/^(\d{4}(-\d{2})?|now)$/, 'until must be YYYY, YYYY-MM, or now').optional(),
      short: z.string().optional(),
      summary: z.string().optional(),
      threads: z.array(z.enum(THREADS)).min(1),
      chose: z.string().optional(),
      ruledOut: z.string().optional(),
      result: z.string().optional(),
      startedBy: z.string().optional(),
      proof: z.array(link).default([]),
      onRoute: z.boolean().default(false),
      images: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() }))
        .default([]),
      imageSlots: z.array(z.string()).default([]),
    }),
});

const articles = defineCollection({
  loader: file('./src/content/articles.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    url: z.string().url().optional(),
    date: dateStr,
    series: z.string(),
    views: z.number().optional(),
    reads: z.number().optional(),
  }),
});

const books = defineCollection({
  loader: file('./src/content/books.json'),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      gloss: z.string(),
      year: z.number(),
      publisher: z.string(),
      url: z.string().url(),
      audience: z.string(),
      note: z.string().optional(),
      cover: image().optional(),
    }),
});

const papers = defineCollection({
  loader: file('./src/content/papers.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    venue: z.string(),
    year: z.number(),
    role: z.string(),
    url: z.string().url().optional(),
  }),
});

const skills = defineCollection({
  loader: file('./src/content/skills.json'),
  schema: z.object({
    id: z.string(),
    group: z.string(),
    phrase: z.enum(PHRASES),
    intro: z.string().optional(),
    tools: z.array(z.string()).min(1),
    proof: z.array(link).min(1, 'every skills row needs proof'),
    order: z.number(),
    home: z.boolean().default(false),
  }),
});

const details = defineCollection({
  loader: glob({ base: './src/content/details', pattern: '**/*.md' }),
  schema: z.object({ title: z.string().optional() }),
});

const shelf = defineCollection({
  loader: file('./src/content/shelf.json'),
  schema: z.object({
    id: z.string(),
    kind: z.enum(['book', 'film', 'trip', 'line', 'learning']),
    title: z.string(),
    author: z.string().optional(),
    year: z.number().optional(),
    country: z.string().optional(),
    note: z.string().optional(),
    order: z.number().default(100),
  }),
});

export const collections = { work, journey, articles, books, papers, skills, shelf, details };
