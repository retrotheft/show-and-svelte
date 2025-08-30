<script lang="ts">
   import "../app.css";

   let code = $state(`<script>
	let message = 'Hello, Svelte REPL!';
	let count = $state(0);
<\/script>

<h1>{message}</h1>
<button onclick={() => count++}>
	Count: {count}
</button>

<style>
	h1 { color: #ff3e00; }
	button {
		background: #ff3e00;
		color: white;
		border: none;
		padding: 8px 16px;
		border-radius: 4px;
		cursor: pointer;
	}
</style>`)

   import { CodeEditor } from '$lib/index.js'
   import HighlightProvider from './_tutorial-0.0.3/_components/HighlightProvider.svelte'
   import REPL from '$lib/components/REPL.svelte'
</script>

<main>
   <REPL {code} />
   <div id="code">
      <HighlightProvider>
         <CodeEditor bind:code language="svelte" />
      </HighlightProvider>
   </div>
</main>

<style>
   main {
      /*background-color: #222;*/
      color: white;
      display: flex;
      align-items: stretch;
      width: 1920px;
      height: 1080px;
      font-size: 1.5rem;
      /*border: 1px solid white;*/
   }

   div#code {
      background-color: #111;
      min-width: 60ch;
   }
</style>
