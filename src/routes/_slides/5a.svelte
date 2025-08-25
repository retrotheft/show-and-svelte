<script lang="ts">
   import { typewriter } from '$lib/vfx/typewriter.js'
   import MarkdownIt from '$lib/components/MarkdownIt.svelte'
   import HighlightProvider from '../_components/HighlightProvider.svelte'
   import content from '../_content/5a.md?raw'
</script>

<div id="view" {@attach typewriter("The rest is magic.")}></div>
<div id="code" data-inset="0"  data-display="flex" data-align-items="center">
   <!-- <CodeEditor bind:code language="javascript" template="js" /> -->
   <HighlightProvider>
      <MarkdownIt {content} />
   </HighlightProvider>
</div>

<style>
   div#view {
      place-self: center;
      transform: translate(-3ch, -100%);
      color: violet;
      width: 30ch;
      white-space: nowrap;
   }

   div#code {
      top: 1ch;
      bottom: 1ch;
      right: 1ch;
      width: 50ch;
      border: 1px solid grey;
      color: white;
      font-size: 2rem;
      text-align: left;
      padding-inline: 2rem;
   }
</style>
