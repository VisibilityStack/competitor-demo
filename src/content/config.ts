import { defineCollection, z } from 'astro:content';

const insights = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		category: z.string(),
		description: z.string(),
		readingTime: z.string(),
		date: z.coerce.date(),
	}),
});

export const collections = { insights };
