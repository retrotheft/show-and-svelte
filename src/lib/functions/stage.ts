import { SvelteMap } from "svelte/reactivity";
import { untrack } from "svelte";

const cloneMap = new Map<HTMLElement, HTMLElement>()

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
   stageState: { updates: number }
) {
   while (virtualStage.firstChild) virtualStage.firstChild.remove();
   console.log("TRANSFER: Starting with scene elements:", scene.map(el => el.id + " " + el.tagName));
   scene.forEach(element => {
      let clone: HTMLElement | undefined;
      clone = cloneMap.get(element)
      if (clone) console.log(clone.style)
      if (!clone) {
         clone = element.cloneNode(true) as HTMLElement
         clone.style.position = "absolute"
         cloneMap.set(element, clone)
      }
      virtualStage.appendChild(clone)


      // const style = getComputedStyle(element);
      const computedStyle = getComputedStyle(clone);
      const actor = element.tagName + (element.id ? `#${element.id}` : '');
      const mark = marks.find(m => m.dataset.actor === actor);

      console.log("TRANSFER: Element", element.id, "→ Actor:", actor, "→ Found mark:", !!mark);

      if (mark) {
         // Transfer all computed styles to mark
         for (const [property, value] of Object.entries(computedStyle)) {
            if (property !== "display") mark.style.setProperty(property, value);
            element.style.setProperty(property, "");
         }
         mark.style.transition = 'all 0.5s ease';
         element.id = "";
         // display: contents is the dream, but attachments are currently preventing this
         element.style.display = "contents"
         // element.style.position = "absolute"
         for (const key in element.dataset) {
            // @ts-expect-error 7015
            if (key in element.style) element.style[key] = element.dataset[key]
         }
         // element.style.visibility = "visible"
         mark.replaceChildren(element);
         mark.classList.add('ready');
      } else {
         console.log("TRANSFER: NO MARK FOUND for", actor);
      }

      untrack(() => stageState.updates++);
   });
}

// much less relevant now that sceneMap uses arrays instead of HTMLCollections
// but still useful as an alternative mode where undeclared elements get cleared instead of persisting
// that said, it only needs to clear the mark, so it's still doing too much
export function restoreElementsFromMarks(
   marks: HTMLElement[],
   sceneNumber: number,
   sceneMap: SvelteMap<number, HTMLElement[]>
) {
   const currentSceneElements: HTMLElement[] = [];

   marks.forEach(mark => {
      if (mark.firstElementChild) {
         const element = mark.firstElementChild as HTMLElement;

         // Restore original ID from data-actor
         const actor = mark.dataset.actor;
         if (actor && actor.includes('#')) {
            const originalId = actor.split('#')[1];
            element.id = originalId;
         }

         currentSceneElements.push(element);
         mark.replaceChildren();
      }
   });
   console.log("Restored elements for scene", sceneNumber, ":", currentSceneElements.map(el => el.id + " " + el.tagName));
   sceneMap.set(sceneNumber, currentSceneElements);
}

export function createSceneController(
   sceneMap: SvelteMap<number, HTMLElement[]>,
   restoreCallback: (sceneNumber: number) => void,
   stageState: { updates: number }
) {
   return function nextScene(currentScene: number, value: number = 1) {
      restoreCallback(currentScene);
      stageState.updates++;
      return Math.max(0, Math.min(sceneMap.size - 1, currentScene + value));
   };
}
