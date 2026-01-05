<script lang="ts">
   import { MarkdownIt } from '$lib/index.js'
   import content from './content/create-raw-snippet.md?raw'
</script>

<h1 id="title">Create Raw Snippet</h1>

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
      font-size: 2em;
      color: white;
      width: 40cqw;
   }
</style>
