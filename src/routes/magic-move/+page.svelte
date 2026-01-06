<script lang="ts">
   import '../../app.css'
   import './style.css'

   import { Stage } from '$lib/index.js'
   import HighlightProvider from "../tutorial-0.0.3/_components/HighlightProvider.svelte"

   import Title from './_slides/title.svelte'
   import Problem from './_slides/problem.svelte'
   import Extract from './_slides/extract.svelte'
   import ExtractLearning from './_slides/extract-learning.svelte'
   import PersistentContainers from './_slides/persistent-containers.svelte'
   import CreateRawSnippet from './_slides/create-raw-snippet.svelte'
   import StructureClarification from './_slides/structure-clarification.svelte'
   import ThreeBirdsOneDiv from './_slides/3-birds-1-div.svelte'
   import SwapClassAndId from './_slides/swap-class-and-id.svelte'
   import FinalCode from './_slides/final-code.svelte'
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
         <Problem />
         <Extract />
         <ExtractLearning />
         <PersistentContainers />
         <CreateRawSnippet />
         <StructureClarification />
         <ThreeBirdsOneDiv />
         <SwapClassAndId />
         <FinalCode />
         <EpicenterSponsor />
      </HighlightProvider>
   </Stage>
</div>
