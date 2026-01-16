<script lang="ts">
   import '../../app.css'
   import './style.css'

   import { Stage } from '$lib/index.js'
   import HighlightProvider from "../tutorial-0.0.3/_components/HighlightProvider.svelte"

   import Title from './_slides/title.svelte'
   import Problem1 from './_slides/problem1.svelte'
   import Problem2 from './_slides/problem2.svelte'
   import Extract from './_slides/extract.svelte'
   import ExtractLearning from './_slides/extract-learning.svelte'
   import WhatStageDoes from './_slides/WhatStageDoes.svelte'
   import Mark1a from './_slides/Mark-1a.svelte'
   import Mark1b from './_slides/Mark-1b.svelte'
   import Mark2a from './_slides/Mark-2a.svelte'
   import Mark2b from './_slides/Mark-2b.svelte'
   import WhatsNext from './_slides/WhatsNext.svelte'
   import CreateRawSnippet from './_slides/create-raw-snippet.svelte'
   import CreateRawSnippet2 from './_slides/create-raw-snippet-2.svelte'
   import CreateRawSnippet3 from './_slides/create-raw-snippet-3.svelte'
   import StructureClarification from './_slides/structure-clarification.svelte'
   import ThreeBirdsOneDiv from './_slides/3-birds-1-div.svelte'
   import SwapClass1 from './_slides/SwapClass1.svelte'
   import SwapClass2 from './_slides/SwapClass2.svelte'
   import CreatedSnippet from './_slides/created-snippet.svelte'
   import EpicenterSponsor from './_slides/epicenter-sponsor.svelte'

   let lastRefresh = $state(0);

   $effect(() => {
      if (import.meta.hot) {
         lastRefresh = Date.now();
      }
   });
</script>

<div>
   <Stage>
      <HighlightProvider>
         <Title />
         <Problem1 />
         <Problem2 />
         <Mark1a />
         <Mark1b />
         <Extract />
         <ExtractLearning />
         <WhatStageDoes />
         <WhatsNext />
         <SwapClass1 />
         <SwapClass2 />
         <Mark2a />
         <Mark2b />
         <CreateRawSnippet />
         <CreateRawSnippet2 />
         <CreateRawSnippet3 />
         <StructureClarification />
         <ThreeBirdsOneDiv />
         <CreatedSnippet />
         <EpicenterSponsor />
      </HighlightProvider>
   </Stage>
</div>
