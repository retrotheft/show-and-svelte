<script lang="ts">
   import { MarkdownIt } from '$lib/index.js'
   import content from './content/swap-class.md?raw'
</script>

<h1 id="title">Swap the CSS Class!</h1>

<div id="element-1" class="element"></div>

<div id="element-2" class="element"></div>

<div id="class">green-and-rounded</div>

<div id="markdown" class="markdown">
   <MarkdownIt {content} />
</div>

<template>
   <p>Next, we want to make sure our mark has the same styles as our scene element.</p>
   <p>This is dead simple, given how CSS works. We can just transfer the id and className.</p>
   <p>Note the mark already has the id as it's assigned when the mark is created on startup.</p>
</template>

<style>
   :root {
      --translate-y: -10cqh;
   }

   #title {
      color: white;
      font-size: 2rem;
      transform: translate(0, -38cqh);
   }

   #markdown {
      place-self: center;
      color: white;
      transform: translate(0, 22cqh);
   }

   .element {
      height: 20cqh;
      aspect-ratio: 1;
      border: 2px dotted grey;
   }

   #element-1 {
      transform: translate(-15cqw, var(--translate-y));
      color: lightgreen;
      border-radius: 25%;
      border-style: solid;
      border-color: lightgreen;
   }

   #element-2 {
      transform: translate(15cqw, var(--translate-y));
   }

   #class {
      border: 1px solid lightgreen;
      background-color: lightgreen;
      transform: translate(-15cqw, var(--translate-y));
      color: black;
      font-size: 1rem;
      padding: 1em;
   }
</style>
