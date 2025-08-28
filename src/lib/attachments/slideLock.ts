import type { Attachment } from 'svelte/attachments';
import { stageState } from '$lib/components/Stage.svelte';

export function slideLock(
   unlock: boolean,
   prev: Function,
   next: Function
): Attachment {
   return (element: Element) => {
      let isActive = false;
      let keydownHandler: ((event: KeyboardEvent) => void) | null = null;
      const lastUpdate = stageState.updates.at(-1)

      function checkIfActive(): boolean {
         // Check if element is connected to the document
         const connected = element.isConnected;

         // Additional check: make sure it's not just in a document fragment
         let current = element.parentNode;
         let inRealDOM = false;

         while (current) {
            if (current === document) {
               inRealDOM = true;
               break;
            }
            if (current.nodeName === '#document-fragment') {
               // Still in a fragment, not the real DOM
               break;
            }
            current = current.parentNode;
         }

         return connected && inRealDOM;
      }

      function handleKeydown(event: KeyboardEvent) {
         if (!unlock) event.stopPropagation();
         if (event.code === "KeyD") return next();
         if (event.code === "KeyA") return prev();
      }

      function updateActiveState() {
         const newActive = checkIfActive();

         if (newActive !== isActive) {
            isActive = newActive;

            if (isActive && !keydownHandler) {
               // Became active - add event listener with capture phase
               keydownHandler = handleKeydown;
               window.addEventListener('keydown', keydownHandler, { capture: true });
               // console.log(`SlideLock ${element.id || 'unnamed'}: Event listener ADDED`);
            } else if (!isActive && keydownHandler) {
               // Became inactive - remove event listener
               window.removeEventListener('keydown', keydownHandler, { capture: true });
               keydownHandler = null;
               // console.log(`SlideLock ${element.id || 'unnamed'}: Event listener REMOVED`);
            }
         }
      }

      // Initial check
      updateActiveState();

      // Additional check after initial render completes
      requestAnimationFrame(() => {
         updateActiveState();
      });

      return () => {
         // Cleanup on destroy
         if (keydownHandler) {
            window.removeEventListener('keydown', keydownHandler, { capture: true });
            // console.log(`SlideLock ${element.id || 'unnamed'}: Attachment destroyed, listener removed`);
         }
      };
   };
}
