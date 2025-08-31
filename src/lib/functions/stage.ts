import { createRawSnippet, type Snippet } from 'svelte';

function extract(children: Snippet) {
   let result: any = null;
   // @ts-expect-error 2554 - Using internal Svelte snippet API
   children({ before: (array: any) => result = array });
   return result;
}

interface ProcessedElement {
   element: Element;
   groupIndex: number;
   elementIndex: number;
   globalIndex: number;
}

interface ProcessedNodes {
   commentGroups: Node[][];
   allElements: ProcessedElement[];
}

// Store processed nodes between the two passes
let cachedProcessedNodes: ProcessedNodes | null = null;

function processNodes(children: Snippet): ProcessedNodes {
   if (!children) return { commentGroups: [], allElements: [] };

   const extracted = extract(children);

   let nodes: Node[] = [];
   if (extracted && extracted.childNodes) {
      nodes = Array.from(extracted.childNodes);
   } else if (Array.isArray(extracted)) {
      nodes = extracted;
   }

   if (nodes.length === 0) {
      console.warn('Could not extract any nodes');
      return { commentGroups: [], allElements: [] };
   }

   // FIRST SPLIT: Group nodes by comment boundaries
   const commentGroups: Node[][] = [];
   let currentGroup: Node[] = [];

   for (const node of nodes) {
      if (node.nodeType === Node.COMMENT_NODE) {
         if (currentGroup.length > 0) {
            commentGroups.push([...currentGroup]);
            currentGroup = [];
         }
      } else {
         currentGroup.push(node);
      }
   }

   if (currentGroup.length > 0) commentGroups.push(currentGroup);

   // Filter out groups that only contain empty text nodes
   const filteredCommentGroups = commentGroups.filter(group =>
      group.some(node => node.nodeType === Node.ELEMENT_NODE)
   );

   // SECOND SPLIT: Within each group, extract individual elements
   const allElements: ProcessedElement[] = [];

   filteredCommentGroups.forEach((group, groupIndex) => {
      // Filter to only element nodes within this group
      const elements = group.filter(node => node.nodeType === Node.ELEMENT_NODE) as Element[];

      elements.forEach((element, elementIndex) => {
         allElements.push({
            element,
            groupIndex,
            elementIndex,
            globalIndex: allElements.length
         });
      });
   });

   return { commentGroups: filteredCommentGroups, allElements };
}

export function extractMarkIds(children: Snippet): [Set<string>, number] {
   if (!children) return [new Set(), 0];

   // Process and cache nodes for later use
   cachedProcessedNodes = processNodes(children);

   const markIds = new Set<string>();
   cachedProcessedNodes.allElements.forEach(({ element }) => {
      if (element.id) {
         markIds.add(element.id);
      }
   });

   const slideCount = cachedProcessedNodes.commentGroups.length;
   return [markIds, slideCount];
}

export function createSnippetMap(children: Snippet): Map<string, Snippet> {
   if (!children) return new Map();

   // Use cached processed nodes or process fresh if not available
   const { allElements } = cachedProcessedNodes || processNodes(children);

   const snippetMap = new Map<string, Snippet<[]>>();

   allElements.forEach(({ element, groupIndex, elementIndex, globalIndex }) => {
      if (element.id) {
         snippetMap.set(`${groupIndex}#${element.id}`, createRawSnippet(() => ({
            render: () => `<div data-element="${globalIndex}" data-group="${groupIndex}" data-element-in-group="${elementIndex}"></div>`,
            setup: (container) => {
               let mark = container.parentNode;
               if (!mark) return console.warn("No mark found for", element)
               if (!(mark instanceof HTMLElement)) return console.warn("Mark is not an HTMLElement", mark)
               setupTransitionEvents(mark, element);
               swapClass(element, mark)
               element.removeAttribute("id")
               const display = (element as HTMLElement).style.display
               ;(element as HTMLElement).style.display = "contents"
               container.appendChild(element);
               return () => {
                  swapClass(mark, element)
                  element.id = mark.id
                  ;(element as HTMLElement).style.display = display
               }
            }
         })));
      }
   });

   // Clear cached nodes after snippet creation
   cachedProcessedNodes = null;

   return snippetMap;
}

function swapClass(source: Element, target: Element) {
   target.className = source.className
   source.removeAttribute('class')
}

function setupTransitionEvents(mark: HTMLElement, element: Element) {
   mark.ontransitionrun = (event) => {
      const syntheticEvent = new TransitionEvent('transitionrun', {
         propertyName: 'mark', // Generic for multiple properties
         elapsedTime: 0,      // Start of batched transition
         pseudoElement: event.pseudoElement,
         bubbles: false,
         cancelable: true
      });
      element.dispatchEvent(syntheticEvent);
   }
   mark.ontransitionstart = (event: TransitionEvent) => {
      // This fires once per frame, regardless of property count
      const syntheticEvent = new TransitionEvent('transitionstart', {
         propertyName: 'mark', // Generic for multiple properties
         elapsedTime: 0,      // Start of batched transition
         pseudoElement: event.pseudoElement,
         bubbles: false,
         cancelable: true
      });
      element.dispatchEvent(syntheticEvent);
   }
   mark.ontransitionend = (event: TransitionEvent) => {
      const syntheticEvent = new TransitionEvent('transitionend', {
         propertyName: 'mark',
         elapsedTime: event.elapsedTime,
         pseudoElement: event.pseudoElement,
         bubbles: false,
         cancelable: true
      });

      element.dispatchEvent(syntheticEvent);
   }
}
