<script lang="ts">
   import { MarkdownIt, CodeEditor } from '$lib/index.js'
   import content from './content/created-snippet.md?raw'
   // import content from './content/created-snippet.txt?raw'

   let code = $state(content)
</script>

<div id="markdown" class="markdown">
   <MarkdownIt {content} />
   <!-- <CodeEditor {code} /> -->
</div>

<template>
   <p>With that, we have seamless transitions between elements across components, with no transition logic.</p>
</template>

<style>
   #markdown {
      place-self: center;
      width: 60cqw;
      font-size: 1.5rem;
   }
</style>
