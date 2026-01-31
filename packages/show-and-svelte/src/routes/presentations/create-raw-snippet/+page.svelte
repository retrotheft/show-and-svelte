<script lang="ts">
   import './style.css'
   import Stage from '$lib/components/Stage.svelte'
   import HighlightProvider from '../../tutorial-0.0.3/_components/HighlightProvider.svelte'

   import Title from './_slides/Title.svelte'
   import Render from './_slides/Render.svelte'
   import Params from './_slides/Params.svelte'
   import Generics from './_slides/Generics.svelte'
   import Setup from './_slides/Setup.svelte'
   import Effect from './_slides/Effect.svelte'
   import MultipleEffect from './_slides/MultipleEffect.svelte'
   import NoEffect from './_slides/NoEffect.svelte'
   import EndTitle from './_slides/EndTitle.svelte'
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
