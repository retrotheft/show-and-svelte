<script lang="ts">
   import { MarkdownIt } from '$lib/index.js'
   import content from './content/structure-clarification.md?raw'
</script>

<h1>Structure Clarification</h1>

<div id="markdown" class="markdown">
   <MarkdownIt {content} />
</div>

<template>
   <p>At this point, let's take a look at the structure we're trying to achieve.</p>
</template>

<style>
   #markdown {
      place-self: center;
   }
</style>
