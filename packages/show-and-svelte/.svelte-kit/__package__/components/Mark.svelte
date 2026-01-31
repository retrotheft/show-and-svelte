<script lang="ts">
   import { type Snippet } from "svelte";

   let { id, snippet }: { id: string; snippet?: Snippet } = $props();

   let transitionEnabled = $state(false);

   let wasEmpty = true;

   $effect(() => {
      const hasSnippet = !!snippet;

      if (wasEmpty && hasSnippet) {
         transitionEnabled = false;
         requestAnimationFrame(() => {
         // Firefox often needs an extra frame
         requestAnimationFrame(() => {
            transitionEnabled = true;
         });
         // this also works for firefox instead of double RAF
         // document.body.offsetHeight;
         });
      }

      wasEmpty = !hasSnippet;
   });
</script>

<div
   {id}
   data-mark="true"
   data-ready="true"
   style="transition: {transitionEnabled ? 'all 0.5s ease' : 'none'}"
>
   {@render snippet?.()}
</div>
