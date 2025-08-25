import { createAttachmentKey, type Attachment } from 'svelte/attachments';
// import { stageState } from '$lib/components/Stage.svelte'

interface StoreContract<T> {
   subscribe: (callback: (value: T) => void) => () => void;
   set: (newValue: T) => void;
   update: (fn: (current: T) => T) => void;
}

type MovableState = {
   element: Element;
   x: number;
   y: number;
} | null;

type DragEvent = MouseEvent & {
   currentTarget: EventTarget & Element;
};

type DollarStoreAttachment = {
   onmousedown: (e: DragEvent) => void;
   [key: symbol]: Attachment;
} & StoreContract<MovableState>;

export function createMovable(): DollarStoreAttachment {
   // Internal z-index management (Window.svelte approach)
   let elements: Element[] = [];

   // Store state - null when nothing active
   let storeState: MovableState = null;

   const subscribers = new Set<(value: MovableState) => void>();

   function notifySubscribers(): void {
      subscribers.forEach(callback => callback(storeState));
   }

   function moveToBack(element: Element): void {
      elements = elements.filter(el => el !== element);
      elements.push(element);

      // Update z-index styles
      elements.forEach((el, index) => {
         (el as HTMLElement).style.zIndex = (index + 100).toString();
      });
   }

   function addElement(element: Element): void {
      if (!elements.includes(element)) {
         elements.push(element);
         moveToBack(element);
      }
   }

   function removeElement(element: Element): void {
      elements = elements.filter(el => el !== element);
      elements.forEach((el, index) => {
         (el as HTMLElement).style.zIndex = (index + 100).toString();
      });
   }

   function handleMouseDown(event: DragEvent): void {
      if (event.button !== 0) return;
      event.preventDefault();

      const element = event.currentTarget as HTMLElement;
      const computedStyle = getComputedStyle(element);
      // element.style.position = "absolute"
      // element.style.display = "block"
      // Bring to front
      moveToBack(element);

      // Closure variables for this drag session
      const startX = event.clientX;
      const startY = event.clientY;
      const elementStartX = parseInt(computedStyle.left) || 0;
      const elementStartY = parseInt(computedStyle.top) || 0;

      // Set active state
      storeState = {
         element,
         x: elementStartX,
         y: elementStartY
      };
      notifySubscribers();

      function handleMouseMove(event: MouseEvent): void {
         if (!storeState) return;

         const deltaX = event.clientX - startX;
         const deltaY = event.clientY - startY;
         const newX = elementStartX + deltaX;
         const newY = elementStartY + deltaY;



         // Update element position
         (element as HTMLElement).style.left = `${newX}px`;
         (element as HTMLElement).style.top = `${newY}px`;

         // Update store state
         storeState = {
            element,
            x: newX,
            y: newY
         };
         notifySubscribers();
      }

      function handleMouseUp(): void {
         // Clear active state
         storeState = null;
         notifySubscribers();

         document.removeEventListener('mousemove', handleMouseMove);
         document.removeEventListener('mouseup', handleMouseUp);
      }

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
   }

   function setupMovable(element: Element): (() => void) {
      // const lastUpdate = stageState.updates
      const htmlElement = element as HTMLElement;

      // Set essential movable styles
      htmlElement.style.cursor = 'move';
      htmlElement.style.userSelect = 'none';
      htmlElement.style.position = 'absolute';

      // Set initial position if not already set
      if (!htmlElement.style.left && !htmlElement.style.top) {
         const rect = htmlElement.getBoundingClientRect();
         const parent = htmlElement.offsetParent || document.body;
         const parentRect = parent.getBoundingClientRect();
         htmlElement.style.left = `${rect.left - parentRect.left}px`;
         htmlElement.style.top = `${rect.top - parentRect.top}px`;
      }

      addElement(element);

      return () => {
         removeElement(element);
         if (storeState?.element === element) {
            storeState = null;
            notifySubscribers();
         }
      };
   }

   const spreadables = {
      onmousedown: handleMouseDown,
      [createAttachmentKey()]: setupMovable
   } as DollarStoreAttachment;

   const store: StoreContract<MovableState> = {
      subscribe: (callback: (value: MovableState) => void) => {
         subscribers.add(callback);
         callback(storeState);
         return () => subscribers.delete(callback);
      },
      set: (newValue: MovableState) => {
         storeState = newValue;
         notifySubscribers();
      },
      update: (fn: (current: MovableState) => MovableState) => {
         storeState = fn(storeState);
         notifySubscribers();
      }
   };

   const { entries, defineProperty } = Object;
   for (const [key, value] of entries(store)) {
      defineProperty(spreadables, key, { value });
   }

   return spreadables;
}

export const movable = createMovable();
