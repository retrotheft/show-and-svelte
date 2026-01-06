<script lang="ts">
   import { MarkdownIt } from '$lib/index.js'
   import content1 from './content/extract-1.md?raw'
   import content2 from './content/extract-2.md?raw'
</script>

<div id="markdown-1" class="markdown">
   <MarkdownIt content={content1} />
</div>

<div id="markdown-2" class="markdown">
   <MarkdownIt content={content2} />
</div>

<div id="note">Can we extract this h1 tag<br /> from inside the Stage component?</div>

<template>
   <p>What if I were to pass a list of 'slides' into a 'Stage' component, and then somehow extract the snippet's contents and manipulate them?</p>
   <p>Specifically, I would need to read the IDs of elements, and insert them into persistent containers on the Stage that actually performed the transitions.</p>
</template>

<style>
   #markdown-1 {
      place-self: center;
      transform: translateX(-20cqw);
      width: 25cqw;
   }

   #markdown-2 {
      place-self: center end;
      transform: translate(-20cqw, -10cqh);
      width: 20cqw;
   }

   #note {
      color: white;
      place-self: center;
      transform: translate(22cqw, 8cqh);
      font-size: 2rem;
      color: orange;
   }
</style>
