<script lang="ts">
   import { typewriter } from '$lib/vfx/typewriter.js'
   import CodeEditor from '$lib/components/CodeEditor.svelte'
   import MarkdownIt from '$lib/components/MarkdownIt.svelte'
   import content from '../_content/5.md?raw'
</script>

<div id="view" {@attach typewriter("That's it.")}></div>
<!-- <div id="svelte"></div> -->
<div id="code" data-inset="0"  data-display="flex" data-align-items="center">
   <!-- <CodeEditor bind:code language="javascript" template="js" /> -->
   <MarkdownIt {content} />
</div>

<style>
   div#view {
      color: lightgreen;
      place-self: center;
      width: 30ch;
      white-space: nowrap;
   }

   div#svelte {
      place-self: center;
      /*transform: translateY(-40vh);*/
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
