<script lang="ts">
   import { MarkdownIt, CodeEditor, Console } from '$lib/index.js'
   import content1 from './content/extract-1.md?raw'
   import content2 from './content/extract-2.md?raw'
</script>

<div id="note-1"><span>Ideally, we could set our presentation up like this:</span></div>

<div id="markdown-1" class="markdown">
   <MarkdownIt content={content1} />
</div>

<div id="note-2"><span>Which begs the question...</span></div>
<div id="note-3"><span>Can we extract the children snippet's contents?</span></div>

<template>
   <p>What if I were to pass a list of 'slides' into a 'Stage' component, and then somehow extract the snippet's contents and manipulate them?</p>
   <p>Specifically, I would need to read the IDs of elements, and insert them into persistent containers on the Stage that actually performed the transitions.</p>
</template>

<div id="editor">
   <span>Stage.svelte</span>
   <CodeEditor code="" rows={14} language="ts" indentSize={3} />
</div>

<div id="console">
   <Console />
</div>

<style>
   #markdown-1 {
      place-self: center;
      /*transform: translateY(-15cqh);*/
      width: 45cqw;
      text-align: center;
      place-items: center;
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

   #note-1 {
      font-size: 2rem;
      transform: translateY(-25cqh);
   }

   #note-2 {
      font-size: 2rem;
      transform: translateY(20cqh);
   }

   #note-3 {
      font-size: 2rem;
      transform: translateY(30cqh);
   }

   #editor {
      place-self: center;
      width: 70ch;
      font-size: 1.5rem;
      background-color: #111;
      border: 1px solid grey;
      position: relative;
      transform: translateY(100cqh) scaleY(0);

      & span {
         font-family: monospace;
         color: grey;
         position: absolute;
         bottom: 100%;
         right: 0;
      }
   }

   #console {
      transform: translate(0, 100cqh);
      width: 200ch;
      height: 9lh;
   }
</style>
