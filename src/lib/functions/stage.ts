import { SvelteMap } from "svelte/reactivity";

const cloneMap = new Map<HTMLElement, HTMLElement>()
const transitionSet = new Set<HTMLElement>()

export function setupSceneMap(templates: HTMLTemplateElement[]): SvelteMap<number, HTMLElement[]> {
   const map = new SvelteMap<number, HTMLElement[]>()
   templates.forEach((template, index) => map.set(index, Array.from(template.content.children) as HTMLElement[]))
   return map;
}

export function setupSceneActorSet(sceneMap: SvelteMap<number, HTMLElement[]>): Set<string> {
   const array = [];
   for (const collection of sceneMap.values()) {
      array.push(...collection);
   }
   const set = new Set<string>()
   for (const element of array) set.add(`${element.tagName}#${element.id}`)
   return set
}

export function setupVirtualStage(callback: Function) {
   return (stageElement: HTMLElement) => {
      const virtualStage = document.createElement('section')
      const style = getComputedStyle(stageElement)
      for (const [property, value] of Object.entries(style)) {
         virtualStage.style.setProperty(property, value)
      }
      virtualStage.style.position = 'absolute';
      virtualStage.style.inset = '0';
      virtualStage.style.left = '-9999px';
      virtualStage.style.top = '-9999px';
      virtualStage.style.zIndex = '-1';

      virtualStage.id = "virtual-stage"
      callback(virtualStage)
   }
}

export function setupMarks(sceneActorSet: Set<string>): HTMLElement[] {
   const array: HTMLElement[] = []
   sceneActorSet.forEach(actor => {
      const [tag, id] = actor.split('#')
      const mark = document.createElement(tag)
      mark.dataset.actor = id ? actor : tag
      array.push(mark)
   })
   return array
}

export function transferStylesToMarks(
   scene: HTMLElement[],
   virtualStage: HTMLElement,
   marks: HTMLElement[],
) {
   clearVirtualStage(virtualStage)
   marks.forEach(mark => mark.innerHTML = "")
   scene.forEach(element => {
      const clone = getOrCreateClone(element)
      virtualStage.appendChild(clone)

      const actor = getActorString(element)
      const mark = marks.find(m => m.dataset.actor === actor);

      if (mark) {
         transferComputedStyles(clone, mark, element)
         setupTransitionEvents(mark, element)
         element.id = "";
         mark.replaceChildren(element);

         mark.classList.add('ready');
      }
   });
}

export function restoreElementIds(marks: HTMLElement[]) {
   marks.forEach(mark => {
      if (mark.firstElementChild) {
         const element = mark.firstElementChild as HTMLElement;

         // Restore original ID from data-actor
         const actor = mark.dataset.actor;
         if (actor && actor.includes('#')) {
            const originalId = actor.split('#')[1];
            element.id = originalId;
         }
      }
   });
}

function setupTransitionEvents(mark: HTMLElement, element: HTMLElement) {
   mark.ontransitionstart = (event: TransitionEvent) => {
      if (transitionSet.has(mark)) return
      transitionSet.add(mark)

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
      if (!transitionSet.has(mark)) return
      const syntheticEvent = new TransitionEvent('transitionend', {
         propertyName: 'mark',
         elapsedTime: event.elapsedTime,
         pseudoElement: event.pseudoElement,
         bubbles: false,
         cancelable: true
      });

      element.dispatchEvent(syntheticEvent);
      transitionSet.delete(mark)
   }
}

function getOrCreateClone(element: HTMLElement): HTMLElement {
   let clone = cloneMap.get(element);
   if (!clone) {
      clone = element.cloneNode(true) as HTMLElement;
      clone.style.position = "absolute";
      cloneMap.set(element, clone);
   }
   return clone;
}

function clearVirtualStage(stage: HTMLElement) {
   while (stage.firstChild) stage.firstChild.remove();
}

// takes computed styles from clone and adds them to the mark, then clears styles from the element
// reapplies specific styles to element from the original element's dataset
// applies pointerEvents to mark
function transferComputedStyles(clone: HTMLElement, mark: HTMLElement, element: HTMLElement) {
   const computedStyle = getComputedStyle(clone)
   for (const [property, value] of Object.entries(computedStyle)) {
      if (property !== "display") mark.style.setProperty(property, value);
      element.style.setProperty(property, "");
   }
   mark.style.transition = 'all 0.5s ease';
   for (const key in element.dataset) {
      // @ts-expect-error 7015
      if (key in element.style) element.style[key] = element.dataset[key]
   }
   if (element.dataset.pointerEvents) mark.style.pointerEvents = element.dataset.pointerEvents
}

function getActorString(element: HTMLElement): string {
   return element.tagName + (element.id ? `#${element.id}` : '');
}
