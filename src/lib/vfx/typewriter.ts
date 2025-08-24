import type { Attachment } from 'svelte/attachments';
import { stageState } from '$lib/components/Stage.svelte'

/**
 * Typewriter attachment for Svelte that animates text content
 */
function typewriter(
   text: string,
   interval: number = 75,
   multipliers: Record<string, number> = {}
): Attachment {
   console.log(stageState.updates)
   return (element: Element) => {
      let lastTimestamp: number = 0;
      let textBuffer: string[] = [];
      let nextInterval: number = 0;
      let typedText: string = '';
      let animationFrameId: number | null = null;
      let isAnimating: boolean = false;

      function init() {
         typedText = '';
         textBuffer = text.split('');
         nextInterval = decideInterval(textBuffer[0] || '');
         element.textContent = '';
         isAnimating = textBuffer.length > 0;
         if (isAnimating) {
            animationFrameId = requestAnimationFrame(animate);
         }
      }

      function decideInterval(character: string): number {
         for (const [char, multiplier] of Object.entries(multipliers)) {
            if (character === char) return interval * multiplier;
         }
         return interval;
      }

      function animate(timestamp: number): void {
         if (!isAnimating) return;

         if (lastTimestamp + nextInterval <= timestamp) {
            lastTimestamp = timestamp;
            const nextChar = textBuffer.shift();
            if (nextChar !== undefined) {
               typedText += nextChar;
               element.textContent = typedText;
               nextInterval = decideInterval(textBuffer[0] || '');
            }

            if (textBuffer.length === 0) {
               isAnimating = false;
               return;
            }
         }

         if (isAnimating) {
            animationFrameId = requestAnimationFrame(animate);
         }
      }

      // Initialize the typewriter effect
      init();

      // Cleanup function
      return (): void => {
         isAnimating = false;
         if (animationFrameId !== null) {
            cancelAnimationFrame(animationFrameId);
         }
      };
   };
}

// Export for use
export { typewriter };
