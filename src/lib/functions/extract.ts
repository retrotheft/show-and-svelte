import { type Snippet } from 'svelte'

export function extract(children: Snippet): DocumentFragment {
	let result: unknown
	// @ts-expect-error 2554
	children({ before:  (array) => result = array })
	return result as DocumentFragment
}

export function extractTemplates(fragment: DocumentFragment): HTMLTemplateElement[] {
   return Array.from(fragment.children).filter(node =>
      node.tagName && node.tagName === "TEMPLATE") as HTMLTemplateElement[]
}

export function extractTemplatesFromChildren(children: Snippet): HTMLTemplateElement[] {
   const fragment = extract(children)
   return extractTemplates(fragment)
}
