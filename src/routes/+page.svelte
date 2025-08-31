<script lang="ts">
   import "../app.css";
   import { createRawSnippet } from 'svelte'

   let code = $state(`<script>
	let message = 'Hello, Svelte REPL!';
	let count = $state(0);

	function increment() {
		count++;
	}
<\/script>

<h1>{message}</h1>
<button onclick={increment}>Increment</button>
<button onclick={() => count++}>
	Count: {count}
</button>
<button onclick={() => alert(myUtilFunction('REPL'))}>Use Global Function</button>

<style>
	h1 { color: #ff3e00; }
	button {
		background: #ff3e00;
		color: white;
		border: none;
		padding: 8px 16px;
		border-radius: 4px;
		cursor: pointer;
		margin: 4px;
	}
</style>`)

   // Define global functions you want available in the REPL
   const globals = {
     myUtilFunction: (text: string) => `Processed: ${text}`,
     formatDate: (date: Date) => date.toLocaleDateString(),
     createRawSnippet
   };

   import { CodeEditor, REPL } from '$lib/index.js'
   import HighlightProvider from './tutorial-0.0.3/_components/HighlightProvider.svelte'
</script>

<main>
   <REPL {code} {globals} />
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
