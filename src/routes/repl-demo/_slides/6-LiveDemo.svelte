<script lang="ts">
   import { CodeEditor, REPL } from '$lib/index.js'
   import { createRawSnippet } from 'svelte'
   import demoCode from './content/live-demo-code.txt?raw'

   let code = $state(demoCode)

   const globals = {
      createRawSnippet
   };
</script>

<div id="subtitle">Live Demo</div>
<div id="title">See it in action</div>
<div id="demo-container">
   <div id="code-editor">
      <CodeEditor bind:code />
   </div>
   <div id="repl-output">
      <REPL {code} {globals} />
   </div>
</div>

<style>
   #subtitle {
      place-self: center;
      color: #ff3e00;
      transform: translateY(-35cqh) scale(5);
      text-align: center;
   }

   #title {
      color: #ccc;
      place-self: center;
      transform: translateY(-25cqh) scale(2);
      text-align: center;
   }

   #demo-container {
      place-self: center;
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: center;
      gap: 2cqw;
      width: 90cqw;
      height: 50cqh;
      transform: translateY(2cqh);
   }

   #code-editor, #repl-output {
      flex: 1;
      min-width: 0;
      color: white;
      font-size: 1.2em;
   }

   #code-editor {
      background-color: #111;
      border: 2px solid #333;
      border-radius: 8px;
   }

   #repl-output {
      border: 2px solid #555;
      border-radius: 8px;
      background-color: #000;
   }
</style>
