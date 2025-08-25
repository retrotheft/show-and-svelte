import { type Snippet } from 'svelte'
import { SvelteMap } from 'svelte/reactivity'

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

export function extractSceneMapFromChildren(children: Snippet): SvelteMap<number, HTMLElement[]> {
   const fragment = extract(children)
   const nodes = Array.from(fragment.childNodes)
   const sceneMap = new SvelteMap<number, HTMLElement[]>()

   let currentGroup: HTMLElement[] = []
   let groupIndex = 0

   for (const node of nodes) {
      if (node.nodeType === Node.COMMENT_NODE && node.nodeValue?.trim() === '') {
         // Empty comment node - separator
         if (currentGroup.length > 0) {
            sceneMap.set(groupIndex, currentGroup)
            groupIndex++
            currentGroup = []
         }
       } else if (node.nodeType === Node.ELEMENT_NODE) {
          currentGroup.push(node as HTMLElement)
       }
   }

   // Add the last group if it has elements
   if (currentGroup.length > 0) {
      sceneMap.set(groupIndex, currentGroup)
   }

   return sceneMap
}

export function extractAndRemoveSceneMapFromChildren(children: Snippet): SvelteMap<number, HTMLCollection> {
   const fragment = extract(children)
   const nodes = Array.from(fragment.childNodes)
   const sceneMap = new SvelteMap<number, HTMLCollection>()

   let currentElements: HTMLElement[] = []
   let groupIndex = 0

   for (const node of nodes) {
      if (node.nodeType === Node.COMMENT_NODE && node.nodeValue?.trim() === '') {
         // Empty comment node - separator
         if (currentElements.length > 0) {
            // Create a temporary container and move elements to it
            const container = document.createElement('div')
            for (const element of currentElements) {
               element.remove() // Remove from original fragment
               container.appendChild(element)
            }
            sceneMap.set(groupIndex, container.children)
            groupIndex++
            currentElements = []
         }
         // Remove the separator comment
         node.remove()
      } else if (node.nodeType === Node.ELEMENT_NODE) {
         currentElements.push(node as HTMLElement)
      }
   }

   // Handle the last group if it has elements
   if (currentElements.length > 0) {
      const container = document.createElement('div')
      for (const element of currentElements) {
         element.remove() // Remove from original fragment
         container.appendChild(element)
      }
      sceneMap.set(groupIndex, container.children)
   }

   return sceneMap
}
