<script lang="ts">
   import { CodeEditor, Console } from "show-and-svelte"
   import content from '../content/render-1.txt?raw'

   let code = $state(content.trim())

   // how to wrap this line/log compare logic?
   // also want to select multiple lines
   // want to run some code when line is correct
   // want to get contents inside <div></div> to render in our div
   // some sort of intermediary component that will compare an array of logs.
   // Add an optional callback to each log type that comes back to the slide component
   //
   // would like to keep activeCode here, move all other logic to component?

   let activeLine = $state('')
   let activeLog = $derived.by(() =>
      logs.find(log => compareStrings(log.trigger, activeLine)) // externalise function that compares and replaces spaces in both
   )

   const compareStrings = (str1: string, str2: string) =>
      str1.replaceAll(' ', '') === str2.replaceAll(' ', '')

   const logs = [
      {
         trigger: `render:()=>"<div></div>"`,
         text: "Success!",
         color: 'lightgreen'
      },
      {
         trigger: `render:()=>""`,
         text: "Illegal invocation in <unknown> in __wrapper.svelte",
         color: 'lightcoral'
      },
      {
         trigger: `render:()=>"a"`,
         text: `[svelte] invalid_raw_snippet_render\nThe \`render\` function passed to \`createRawSnippet\` should return HTML for a single element\nhttps://svelte.dev/e/invalid_raw_snippet_render`,
         color: 'lightcoral'
      },
   ]

   $effect(() => console.log(activeLine))
</script>

<div id="code-editor">
   <CodeEditor {code} rows={5} language="js" callback={(lines, index) => activeLine = lines[index] ?? ''} indentSize={3} />
</div>

<div id="console">
   {#if activeLog?.trigger === `render:()=>"<div></div>"` }
      <div id="hello-there">Hello there</div>
   {:else}
      <Console log={activeLog} />
   {/if}
</div>

<template>
   <ol>
      <li>Show blank render string (illegal invocation)</li>
      <li>Show text render string (should be html)</li>
      <li>Show valid render string</li>
   </ol>
</template>

<style>
   #code-editor {
      place-self: center;
      transform: translate(0, -15cqh);
      color: white;
      font-size: 2rem;
      background-color: hsla(240, 30%, 15%, 0.5);
      border-radius: 1em;
      padding: 1em;
      height: lh;

      :global(pre, textarea) {
         height: 1px;
      }
   }

   #console {
      place-self: center;
      transform: translate(0, 20cqh);
      width: 60ch;
      height: 5lh;
      font-size: 2rem;
   }

   #hello-there {
      color: white;
      border: 1px solid white;
      width: 100%;
   }
</style>
