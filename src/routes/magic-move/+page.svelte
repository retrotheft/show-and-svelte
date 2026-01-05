<script lang="ts">
   import '../../app.css'
   import './style.css'

   import { Stage } from '$lib/index.js'
   import HighlightProvider from "../tutorial-0.0.3/_components/HighlightProvider.svelte"

   import Title from './_slides/title.svelte'
   import Problem from './_slides/problem.svelte'
   import Extract from './_slides/extract.svelte'
   import ExtractLearning from './_slides/extract-learning.svelte'
   import ManualMethod from './_slides/manual-method.svelte'
   import CreateRawSnippetDocs from './_slides/create-raw-snippet-docs.svelte'
   import IllegalInvocation from './_slides/illegal-invocation.svelte'
   import WhenToUseEffect from './_slides/when-to-use-effect.svelte'
   import StructureClarification from './_slides/structure-clarification.svelte'
   import ThreeBirdsOneDiv from './_slides/3-birds-1-div.svelte'
   import SwapClassAndId from './_slides/swap-class-and-id.svelte'
   import FinalCode from './_slides/final-code.svelte'
   import EpicenterSponsor from './_slides/epicenter-sponsor.svelte'
</script>

<div>
   <Stage>
      <Title />
      <Problem />
      <Extract />
      <ExtractLearning />
      <ManualMethod />
      <CreateRawSnippetDocs />
      <IllegalInvocation />
      <WhenToUseEffect />
      <StructureClarification />
      <ThreeBirdsOneDiv />
      <SwapClassAndId />
      <FinalCode />
      <EpicenterSponsor />
   </Stage>
</div>
