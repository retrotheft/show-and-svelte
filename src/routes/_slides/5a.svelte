<script lang="ts">
   import { typewriter } from '$lib/vfx/typewriter.js'
   import codeText from '../_content/slide-5a-example.txt?raw'

   import CodeEditor from '$lib/components/CodeEditor.svelte'

   let code = $state(codeText)
</script>

<div id="svelte" {@attach typewriter("The rest is magic.")}></div>
<div id="code" data-inset="0">
   <CodeEditor bind:code language="javascript" template="js" />
</div>

<style>
   div#svelte {
      transform: translate(10vh, 30vh);
      color: cornflowerblue;
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
