<script lang="ts">
   import { typewriter } from '$lib/vfx/typewriter.js'
   import CodeEditor from '$lib/components/CodeEditor.svelte'
   import exampleSlide from '../_content/slide-5-example.txt?raw'

   let code = $state(exampleSlide)
</script>

<div id="svelte" {@attach typewriter("That's it.")}></div>
<div id="code" data-inset="0">
   <CodeEditor bind:code language="javascript" template="js" />
</div>

<style>
   div#svelte {
      place-self: center;
      /*transform: translateY(-40vh);*/
      color: violet;
      width: 30ch;
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
      padding: 1em;
      font-family: monospace;
   }
</style>
