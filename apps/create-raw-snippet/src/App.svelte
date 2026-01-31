<script lang="ts">
   import './assets/style.css'
   import { Stage } from 'show-and-svelte'
   import HighlightProvider from './lib/components/HighlightProvider.svelte'

   import Title from './lib/slides/Title.svelte'
   import Render from './lib/slides/Render.svelte'
   import Params from './lib/slides/Params.svelte'
   import Generics from './lib/slides/Generics.svelte'
   import Setup from './lib/slides/Setup.svelte'
   import Effect from './lib/slides/Effect.svelte'
   import MultipleEffect from './lib/slides/MultipleEffect.svelte'
   import NoEffect from './lib/slides/NoEffect.svelte'
   import EndTitle from './lib/slides/EndTitle.svelte'
</script>

<HighlightProvider>
   <Stage>
      <Title />
      <Render />
      <Params />
      <Generics />
      <Setup />
      <Effect />
      <MultipleEffect />
      <NoEffect />
      <EndTitle />
   </Stage>
</HighlightProvider>
