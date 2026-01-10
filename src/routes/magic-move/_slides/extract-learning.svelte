<script lang="ts">
   import { CodeEditor, Console } from '$lib/index.js'

   import content from './content/extract-learning-1.txt?raw'

   let code = $state(content.trim())

   let activeLine = $state('')
   let activeLog = $derived.by(() => {
      const line = activeLine?.replaceAll(' ', '')
      return logs.find(log => log.trigger === line) // externalise function that compares and replaces spaces in both
   })

   const logs = [
      {
         trigger: `children()`,
         text: "error: Cannot read properties of undefined (reading 'before')",
         color: 'lightcoral'
      },
      {
         trigger: `children({before:null})`,
         text: "error: anchor.before is not a function",
         color: 'lightcoral'
      },
      {
         trigger: `children({before:(...args)=>console.dir(args)})`,
         text: `Success! This will log either a Node or a DocumentFragment, depending on the snippet's contents.`,
         color: 'lightgreen'
      },
   ]
</script>

<div id="editor">
   <CodeEditor {code} rows={14} language="ts" callback={(lines, index) => activeLine = lines[index]} indentSize={3} />
</div>

<div id="console">
   <Console log={activeLog} />
</div>

<template>
   <p>Could be improved by displaying the snippet and then logging the actual Node or Document Fragment</p>
</template>

<style>
   #editor {
      place-self: center;
      width: 70ch;
      font-size: 1.5rem;
      background-color: #111;
      border: 1px solid grey;
      position: relative;
      transform: translateY(-10cqh);
   }

   #console {
      place-self: center;
      transform: translateY(27cqh);
      width: 200ch;
      height: 13lh;
   }
</style>
