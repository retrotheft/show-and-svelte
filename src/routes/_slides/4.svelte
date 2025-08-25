<script lang="ts">
   import { typewriter } from "$lib/vfx/typewriter.js";
   import CodeEditor from '$lib/components/CodeEditor.svelte'
   import MarkdownIt from "$lib/components/MarkdownIt.svelte";
   import content from '../_content/4.md?raw'

   let code = $state(``)
</script>

<div id="view">Instructions</div>
<div id="svelte"></div>
<!-- <div id="code" {@attach typewriter("1. Create slides from Svelte components.")}></div> -->
<div id="code" data-inset="0" data-display="flex" data-align-items="center">
   <!-- <CodeEditor bind:code language="javascript" template="js" placeholder="1. Create slides with Svelte Components." /> -->
   <MarkdownIt {content} />
</div>

<style>
   div#view {
      color: cornflowerblue;
      place-self: center;
      /*transform: translateY(50vh);*/
      white-space: nowrap;
      width: 30ch;
   }

   div#svelte {
      color: orangered;
      place-self: start center;
      transform: translateY(30vh);
      white-space: nowrap;
      width: 34ch;
      opacity: 0;
   }

   div#code {
      top: 1ch;
      bottom: 1ch;
      right: 1ch;
      width: 50%;
      border: 1px solid grey;
      color: white;
      font-size: 3rem;
      text-align: left;
      padding-inline: 2rem;
   }
</style>
