<script lang="ts">
   import { CodeEditor } from '$lib/index.js'
   import inputCode from './content/parser-magic-input.txt?raw'
   
   let code = $state(inputCode)
</script>

<div id="subtitle">Parser Magic</div>
<div id="title">How we transform Svelte syntax</div>
<div id="code">
   <CodeEditor bind:code />
</div>
<div id="arrow">→</div>
<div id="output">
<pre><code>let count = 0;

&lt;span id="count"&gt;0&lt;/span&gt;

data-click="increment()"</code></pre>
</div>

<style>
   #subtitle {
      place-self: center;
      color: cyan;
      transform: translateY(-35cqh) scale(5);
      text-align: center;
   }

   #title {
      color: #ccc;
      place-self: center;
      transform: translateY(-25cqh) scale(2);
      text-align: center;
   }

   #code {
      place-self: start;
      background-color: #111;
      border: 2px solid #333;
      width: 35cqw;
      height: 40cqh;
      transform: translateY(0cqh);
      color: white;
   }

   #arrow {
      place-self: center;
      color: yellow;
      font-size: 4em;
      transform: scale(3);
   }

   #output {
      place-self: end;
      background-color: #222;
      border: 2px solid #555;
      width: 35cqw;
      height: 40cqh;
      padding: 1em;
      transform: translateY(0cqh);
      overflow: auto;
   }

   pre {
      color: lightgreen;
      font-family: 'Courier New', monospace;
      font-size: 1.2em;
      margin: 0;
      line-height: 1.4;
   }
</style>