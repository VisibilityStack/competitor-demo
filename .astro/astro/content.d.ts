declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"insights": {
"beyond-talent-marketplaces.md": {
	id: "beyond-talent-marketplaces.md";
  slug: "beyond-talent-marketplaces";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"boutique-vs-staffing-firm.md": {
	id: "boutique-vs-staffing-firm.md";
  slug: "boutique-vs-staffing-firm";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"closing-senior-engineers.md": {
	id: "closing-senior-engineers.md";
  slug: "closing-senior-engineers";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"confidential-cto-search.md": {
	id: "confidential-cto-search.md";
  slug: "confidential-cto-search";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"cost-of-a-mis-hire.md": {
	id: "cost-of-a-mis-hire.md";
  slug: "cost-of-a-mis-hire";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"data-scientist-vs-ml-engineer.md": {
	id: "data-scientist-vs-ml-engineer.md";
  slug: "data-scientist-vs-ml-engineer";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"engineering-hiring-process.md": {
	id: "engineering-hiring-process.md";
  slug: "engineering-hiring-process";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"exec-search-partner-cto.md": {
	id: "exec-search-partner-cto.md";
  slug: "exec-search-partner-cto";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"exec-search-vs-startup-search.md": {
	id: "exec-search-vs-startup-search.md";
  slug: "exec-search-vs-startup-search";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"founding-engineer-search.md": {
	id: "founding-engineer-search.md";
  slug: "founding-engineer-search";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"hiring-ml-engineers-comp.md": {
	id: "hiring-ml-engineers-comp.md";
  slug: "hiring-ml-engineers-comp";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"hiring-your-first-pm.md": {
	id: "hiring-your-first-pm.md";
  slug: "hiring-your-first-pm";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"inhouse-recruiter-vs-agency.md": {
	id: "inhouse-recruiter-vs-agency.md";
  slug: "inhouse-recruiter-vs-agency";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"jd-senior-engineers.md": {
	id: "jd-senior-engineers.md";
  slug: "jd-senior-engineers";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"nontechnical-founder-hiring-engineers.md": {
	id: "nontechnical-founder-hiring-engineers.md";
  slug: "nontechnical-founder-hiring-engineers";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"pm-interview-loop.md": {
	id: "pm-interview-loop.md";
  slug: "pm-interview-loop";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"psychometric-screening-mis-hires.md": {
	id: "psychometric-screening-mis-hires.md";
  slug: "psychometric-screening-mis-hires";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"questions-for-recruiting-agency.md": {
	id: "questions-for-recruiting-agency.md";
  slug: "questions-for-recruiting-agency";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"recruiting-fee-structures.md": {
	id: "recruiting-fee-structures.md";
  slug: "recruiting-fee-structures";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"replacement-guarantees.md": {
	id: "replacement-guarantees.md";
  slug: "replacement-guarantees";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"retained-search-cto-cost.md": {
	id: "retained-search-cto-cost.md";
  slug: "retained-search-cto-cost";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"retained-vs-contingency.md": {
	id: "retained-vs-contingency.md";
  slug: "retained-vs-contingency";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"rpo-vs-recruiting-agency.md": {
	id: "rpo-vs-recruiting-agency.md";
  slug: "rpo-vs-recruiting-agency";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"screening-included-not-addon.md": {
	id: "screening-included-not-addon.md";
  slug: "screening-included-not-addon";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"senior-engineers-series-a.md": {
	id: "senior-engineers-series-a.md";
  slug: "senior-engineers-series-a";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"shortlist-technical-recruiting-agency.md": {
	id: "shortlist-technical-recruiting-agency.md";
  slug: "shortlist-technical-recruiting-agency";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"sourcing-engineers-who-never-apply.md": {
	id: "sourcing-engineers-who-never-apply.md";
  slug: "sourcing-engineers-who-never-apply";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"stage-fit-hiring.md": {
	id: "stage-fit-hiring.md";
  slug: "stage-fit-hiring";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"structured-vs-unstructured-interviews.md": {
	id: "structured-vs-unstructured-interviews.md";
  slug: "structured-vs-unstructured-interviews";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"technical-recruiter-vs-resume-forwarder.md": {
	id: "technical-recruiter-vs-resume-forwarder.md";
  slug: "technical-recruiter-vs-resume-forwarder";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"time-to-hire-benchmarks.md": {
	id: "time-to-hire-benchmarks.md";
  slug: "time-to-hire-benchmarks";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"vp-engineering-hire-or-promote.md": {
	id: "vp-engineering-hire-or-promote.md";
  slug: "vp-engineering-hire-or-promote";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"what-recruiting-agencies-charge.md": {
	id: "what-recruiting-agencies-charge.md";
  slug: "what-recruiting-agencies-charge";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"when-to-hire-head-of-data.md": {
	id: "when-to-hire-head-of-data.md";
  slug: "when-to-hire-head-of-data";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"where-senior-engineers-get-found.md": {
	id: "where-senior-engineers-get-found.md";
  slug: "where-senior-engineers-get-found";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"why-engineering-hires-fail.md": {
	id: "why-engineering-hires-fail.md";
  slug: "why-engineering-hires-fail";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
