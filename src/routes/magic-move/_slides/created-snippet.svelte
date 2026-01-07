<script lang="ts">
   import { MarkdownIt, CodeEditor, Console } from '$lib/index.js'
   // import content from './content/created-snippet.md?raw'
   import content from './content/created-snippet.txt?raw'

   let code = $state(content.trim())

   let activeLine = $state('')
   let activeLog = $derived.by(() => {
      const line = activeLine.replaceAll(' ', '')
      return logs.find(log => log.trigger === line)
   })

   const logs = [
      {
         trigger: `render:()=>"<div></div>",`,
         text: "Success!",
         color: 'lightgreen'
      },
      {
         trigger: `render:()=>"",`,
         text: "Illegal invocation in <unknown> in __wrapper.svelte",
         color: 'lightcoral'
      },
      {
         trigger: `render:()=>"a",`,
         text: `[svelte] invalid_raw_snippet_render\nThe \`render\` function passed to \`createRawSnippet\` should return HTML for a single element\nhttps://svelte.dev/e/invalid_raw_snippet_render`,
         color: 'lightcoral'
      },
   ]
</script>

<div id="editor">
   <!-- <MarkdownIt {content} /> -->
   <CodeEditor {code} rows={14} language="javascript" callback={(lines: string[], index: number) => activeLine = lines[index]} />
</div>

<div id="console">
   <Console log={activeLog} />
</div>

<template>
   <p>With that, we have seamless transitions between elements across components, with no transition logic.</p>
   <p>It would be nice to have a lined number box that can hover lines, and a console readout.</p>
</template>

<style>
   #editor {
      place-self: center;
      width: 45ch;
      font-size: 1.5rem;
      background-color: #111;
      border: 1px solid grey;
      position: relative;
      transform: translateY(-10cqh);
   }

   #console {
      place-self: end center;
      transform: translateY(-17cqh);
      width: 200ch !important;
      height: 9lh;
   }
</style>
