<script lang="ts">
   import "../app.css";

   import { Stage } from "$lib/index.js";
   import Title from "./_slides/Title.svelte";
   import BabysFirstSlide from "./_slides/BabysFirstSlide.svelte";
   import StageSlide from "./_slides/StageSlide.svelte"

   import { PresentationViewer } from "$lib/index.js";
   import HighlightProvider from "./_components/HighlightProvider.svelte";

   let lastRefresh = $state(0);

   $effect(() => {
      if (import.meta.hot) {
         lastRefresh = Date.now();
      }
   });

</script>

<div>
   {#key lastRefresh}
      <Stage>
         <HighlightProvider>
            <Title />
            <BabysFirstSlide />
            <StageSlide />
         </HighlightProvider>
      </Stage>
   {/key}
</div>

<!-- <PresentationViewer /> -->

<style>
   div {
      border: 1px solid grey;
   }
</style>
