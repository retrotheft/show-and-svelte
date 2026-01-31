import type { Attachment } from 'svelte/attachments'
import { stageState } from '$lib/components/Stage.svelte'

export function reactiveProperties(obj: Record<string, string>): Attachment {
   const values = Object.values(obj) // necessary for reactivity
   return (element: Element) => {
      const lastUpdate = stageState.updates.at(-1)
      if (!(element instanceof HTMLElement)) return
      const parent = element.parentElement
      if (!parent) return
      for (const [key, value] of Object.entries(obj)) parent.style.setProperty(key, value)
   }
}
