<script lang="ts">
   import "../app.css";
   import { PresentationViewer } from "$lib/index.js";
   import HighlightProvider from "./_components/HighlightProvider.svelte";
   import Record from '$lib/components/Record.svelte'

   import { Stage } from "$lib/index.js";
   import Title from "./_slides/1-Title.svelte";
   import BabysFirstSlide from "./_slides/2-BabysFirstSlide.svelte";
   import Twins from "./_slides/3-Twins.svelte";
   import StageSlide from "./_slides/4-StageSlide.svelte"
   import ThatsIt from './_slides/5-ThatsIt.svelte'
   import QuickTips from "./_slides/6-QuickTips.svelte";

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
            <Twins />
            <StageSlide />
            <ThatsIt />
            <QuickTips />
         </HighlightProvider>
      </Stage>
   {/key}
</div>

<!-- <PresentationViewer /> -->
<!-- <Record /> -->
