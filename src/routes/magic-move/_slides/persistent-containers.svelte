<script lang="ts">
   import { MarkdownIt } from '$lib/index.js'
   import content from './content/create-raw-snippet.md?raw'
</script>

<h1 id="title">Persistent Containers</h1>

<div id="markdown" class="markdown">
   <MarkdownIt {content} />
</div>

<template>
   <p>Next problem. How can we swap elements in and out of persistent containers in the DOM while keeping reactivity and styles intact?</p>
</template>

<style>
   #markdown {
      place-self: center;
      font-size: 2em;
      color: white;
      width: 40cqw;
   }
</style>
