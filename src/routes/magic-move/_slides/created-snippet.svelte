<script lang="ts">
   import { MarkdownIt, CodeEditor } from '$lib/index.js'
   // import content from './content/created-snippet.md?raw'
   import content from './content/created-snippet.txt?raw'

   let code = $state(content.trim())
</script>

<div id="markdown" class="markdown">
   <!-- <MarkdownIt {content} /> -->
   <CodeEditor {code} rows={14} language="javascript" />
</div>

<template>
   <p>With that, we have seamless transitions between elements across components, with no transition logic.</p>
   <p>It would be nice to have a lined number box that can hover lines, and a console readout.</p>
</template>

<style>
   #markdown {
      place-self: center;
      width: 45ch;
      font-size: 1.5rem;
      background-color: #111;
      border: 1px solid grey;
      /*height: 24em;*/
      position: relative;
      /*padding-inline: 2ch;*/
   }
</style>
