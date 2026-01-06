<script lang="ts">
   import { MarkdownIt } from '$lib/index.js'
   import content from './content/create-raw-snippet-1.md?raw'
</script>

<div id="markdown" class="markdown">
   <MarkdownIt {content} />
</div>

<template>
   <p>Create Raw Snippet documentation.</p>
   <p>Element argument is the topmost element in render. No element in render? Illegal invocation.</p>
   <p>Demonstrate why $effect is sometimes necessary in createRawSnippet (only when making a new, created element reactive).</p>
</template>

<style>
   #markdown {
      place-self: center;
      color: white;
      width: 60cqw;
   }
</style>
