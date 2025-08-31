<script lang="ts">
   import '../../app.css'
   import HighlightProvider from "../tutorial-0.0.3/_components/HighlightProvider.svelte";

   import { Stage } from "$lib/index.js";
   import Title from "./_slides/1-Title.svelte";
   import WhatIsREPL from "./_slides/2-WhatIsREPL.svelte";
   import TheChallenge from "./_slides/3-TheChallenge.svelte";
   import OurApproach from "./_slides/4-OurApproach.svelte";
   import ParserMagic from "./_slides/5-ParserMagic.svelte";
   import LiveDemo from "./_slides/6-LiveDemo.svelte";
   import KeyFeatures from "./_slides/7-KeyFeatures.svelte";
   import HowItWorks from "./_slides/8-HowItWorks.svelte";
   import Limitations from "./_slides/9-Limitations.svelte";
   import ThatsAll from './_slides/10-ThatsAll.svelte'

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
            <WhatIsREPL />
            <TheChallenge />
            <OurApproach />
            <ParserMagic />
            <LiveDemo />
            <KeyFeatures />
            <HowItWorks />
            <Limitations />
            <ThatsAll />
         </HighlightProvider>
      </Stage>
   {/key}
</div>