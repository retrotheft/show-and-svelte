import type { Attachment } from 'svelte/attachments';
import { stageState } from '$lib/components/Stage.svelte';

export function domPresenceDetector(callback: (isActive: boolean) => void): Attachment {
   return (element: Element) => {
      let isActive = false;
      let checkInterval: number | null = null;

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

      function updateActiveState() {
         const newActive = checkIfActive();

         if (newActive !== isActive) {
            isActive = newActive;
            console.log(`Element ${element.id || 'unnamed'} is now:`, isActive ? 'ACTIVE' : 'INACTIVE');
            console.log('  - isConnected:', element.isConnected);
            console.log('  - parentNode:', element.parentNode?.nodeName);
            console.log('  - in real DOM:', newActive);
            callback(isActive)
         }
      }

      // Initial check
      updateActiveState();

      // React to stage updates
      const lastUpdate = stageState.updates.at(-1);

      // Set up periodic checking to catch DOM changes
      checkInterval = setInterval(updateActiveState, 100);

      updateActiveState();


      return () => {
         callback(false)
         if (checkInterval !== null) {
            clearInterval(checkInterval);
         }
      };
   };
}
