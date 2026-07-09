import { defineCollection, z } from 'astro:content';

const insights = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		category: z.string(),
		description: z.string(),
		readingTime: z.string(),
		order: z.number().default(0),
	}),
});

export const collections = { insights };
