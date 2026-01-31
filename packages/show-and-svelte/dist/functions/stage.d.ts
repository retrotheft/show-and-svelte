import { type Snippet } from 'svelte';
export declare function extractMarkIds(children: Snippet): [Set<string>, number];
export declare function createSnippetMap(children: Snippet): Map<string, Snippet>;
