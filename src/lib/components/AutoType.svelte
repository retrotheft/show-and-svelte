<script lang="ts">
   import {JoinLoop, type BeginCallback } from "svelte-mainloop"

   let { text, interval = 75, multipliers = {} }: { text: string, interval?: number, multipliers?: Record<string, number> } = $props()

   let lastTimestamp = $state(0)
   let textBuffer = $state<string[]>([])
   let nextInterval = $state(0)

   function init() {
      typedText = ""
      textBuffer = text.split("")
      nextInterval = decideInterval(textBuffer[0])
   }

   function decideInterval(character: string) {
      for (const [char, multiplier] of Object.entries(multipliers)) {
         if (character === char) return interval * multiplier
      }
      return interval
   }

   const begin: BeginCallback = (timestamp: number) => {
      if (lastTimestamp + nextInterval > timestamp) return

      lastTimestamp = timestamp

      typedText += textBuffer.shift()
      nextInterval = decideInterval(textBuffer[0])
   }

   let typedText = $state("")

   init()
</script>

<!-- <button onclick={init}>Reset</button> -->

{#if typedText.length < text.length}
   <JoinLoop {begin} />
{/if}

<article>
   {typedText}
</article>

<style scoped>
   article {
      max-width: 50ch;
   }
</style>
