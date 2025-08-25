import type { Attachment } from 'svelte/attachments';
import { stageState } from '$lib/components/Stage.svelte'

/**
 * Typewriter attachment for Svelte that animates text content
 */
// export function typewriter(
//    text: string,
//    interval: number = 75,
//    multipliers: Record<string, number> = {}
// ): Attachment {
//    return (element: Element) => {
//       console.log("Running old typewriter attachment", Date.now())
//       let lastSceneChange: number = stageState.updates
//       let lastTimestamp: number = 0;
//       let textBuffer: string[] = [];
//       let nextInterval: number = 0;
//       let typedText: string = '';
//       let animationFrameId: number | null = null;
//       let isAnimating: boolean = false;

//       function init() {
//          typedText = '';
//          textBuffer = text.split('');
//          nextInterval = decideInterval(textBuffer[0] || '');
//          element.textContent = '';
//          isAnimating = textBuffer.length > 0;
//          if (isAnimating) {
//             animationFrameId = requestAnimationFrame(animate);
//          }
//       }

//       function decideInterval(character: string): number {
//          for (const [char, multiplier] of Object.entries(multipliers)) {
//             if (character === char) return interval * multiplier;
//          }
//          return interval;
//       }

//       function animate(timestamp: number): void {
//          if (!isAnimating) return;

//          if (lastTimestamp + nextInterval <= timestamp) {
//             lastTimestamp = timestamp;
//             const nextChar = textBuffer.shift();
//             if (nextChar !== undefined) {
//                typedText += nextChar;
//                element.textContent = typedText;
//                nextInterval = decideInterval(textBuffer[0] || '');
//             }

//             if (textBuffer.length === 0) {
//                isAnimating = false;
//                return;
//             }
//          }

//          if (isAnimating) {
//             animationFrameId = requestAnimationFrame(animate);
//          }
//       }

//       // Initialize the typewriter effect
//       init();

//       // Cleanup function
//       return (): void => {
//          isAnimating = false;
//          if (animationFrameId !== null) {
//             cancelAnimationFrame(animationFrameId);
//          }
//       };
//    };
// }

// export function typewriter(
//    text: string,
//    interval: number = 75,
//    multipliers: Record<string, number> = {}
// ): Attachment {
//    return (element: Element) => {
//       let timeoutId: number | null = null;
//       let currentIndex = 0;
//       let lastSceneChange = stageState.updates;

//       function getInterval(char: string): number {
//          for (const [character, multiplier] of Object.entries(multipliers)) {
//             if (char === character) return interval * multiplier;
//          }
//          return interval;
//       }

//       function restart() {
//          // Clear any existing timeout
//          if (timeoutId !== null) {
//             clearTimeout(timeoutId);
//             timeoutId = null;
//          }

//          // Reset state
//          currentIndex = 0;
//          element.textContent = '';
//          lastSceneChange = stageState.updates;

//          // Start typing fresh
//          typeNext();
//       }

//       function typeNext(): void {
//          // Check for scene change
//          if (stageState.updates !== lastSceneChange) {
//             restart();
//             return;
//          }

//          if (currentIndex >= text.length) return;

//          const char = text[currentIndex];
//          element.textContent += char;
//          currentIndex++;

//          if (currentIndex < text.length) {
//             const nextInterval = getInterval(text[currentIndex]);
//             timeoutId = setTimeout(typeNext, nextInterval);
//          }
//       }

//       // Initialize
//       element.textContent = '';
//       typeNext();

//       // Cleanup
//       return () => {
//          if (timeoutId !== null) {
//             clearTimeout(timeoutId);
//          }
//       };
//    };
// }

// export function typewriter(
//    text: string,
//    interval: number = 75,
//    multipliers: Record<string, number> = { ' ': 2 }
// ): Attachment {
//    return (element: Element) => {
//       let timeoutId: number | null = null;
//       let currentIndex = 0;
//       let lastSceneChange = stageState.updates;

//       function getInterval(char: string): number {
//          return interval * (multipliers[char] || 1);
//       }

//       function typeNext(): void {
//          // Check for scene change on every call
//          if (stageState.updates !== lastSceneChange) {
//             lastSceneChange = stageState.updates;
//             currentIndex = 0;
//             element.textContent = '';
//          }

//          if (currentIndex >= text.length) {
//             // Keep checking for scene changes even when done typing
//             timeoutId = setTimeout(typeNext, 100);
//             return;
//          }

//          element.textContent += text[currentIndex];
//          currentIndex++;

//          timeoutId = setTimeout(typeNext, getInterval(text[currentIndex - 1]));
//       }

//       element.textContent = '';
//       typeNext();

//       return () => {
//          if (timeoutId) clearTimeout(timeoutId);
//       };
//    };
// }
//

function typewriter(
   text: string,
   interval: number = 75,
   multipliers: Record<string, number> = { ' ': 2 }
): Attachment {
   return (element: Element) => {
      let animationFrameId: number | null = null;
      let currentIndex = 0;
      let lastTimestamp = 0;
      let nextInterval = 0;
      const lastUpdate = stageState.updates

      // Initialize
      currentIndex = 0;
      element.textContent = '';
      nextInterval = getInterval(text[0] || '');
      animationFrameId = requestAnimationFrame(animate);

      function getInterval(char: string): number {
         return interval * (multipliers[char] || 1);
      }

      function animate(timestamp: number): void {
         if (currentIndex >= text.length) return;

         if (lastTimestamp + nextInterval <= timestamp) {
            lastTimestamp = timestamp;

            const char = text[currentIndex];
            element.textContent += char;
            currentIndex++;

            if (currentIndex < text.length) {
               nextInterval = getInterval(text[currentIndex]);
               animationFrameId = requestAnimationFrame(animate);
            }
         } else {
            // Not time for next character yet, keep checking
            animationFrameId = requestAnimationFrame(animate);
         }
      }

      return () => {
         if (animationFrameId !== null) {
            cancelAnimationFrame(animationFrameId);
         }
      };
   };
}

export { typewriter };
