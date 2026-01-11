<script lang="ts">
   import { Console, CodeEditor } from '$lib/index.js'
</script>

<div id="editor">
   <CodeEditor code="" rows={14} indentSize={3} />
</div>

<div id="mark-example">
   <h2>This is the same Mark element as before. It's controlling the transition.</h2>
   <div id="slide-element-example">This element has now been replaced, and is from a different slide.</div>
</div>

<template>
   <p>Next problem. How can we swap elements in and out of persistent containers in the DOM while keeping reactivity and styles intact?</p>
   <p>For this, we'll use createRawSnippet, which has some neat features we can take advantage of.</p>
   <p>Visual demo of Mark moving around on page while different elements are swapped in and out of it.</p>
</template>

<div id="console">
   <Console />
</div>

<style>
   #editor {
      place-self: center;
      width: 70ch;
      font-size: 1.5rem;
      background-color: #111;
      border: 1px solid grey;
      position: relative;
      transform: translateY(-100cqh);
   }

   #console {
      transform: translate(0cqw, 100cqh);
      width: 30ch;
      height: 4lh;
   }

   #mark-example {
      color: cornflowerblue;
      border: 5px dashed grey;
      padding: 1em;
      font-size: 1.5rem;
      text-align: center;
      width: 40ch;
      transform: translate(10cqw, 10cqh);
      /*interpolate-size: allow-keywords;*/
      height: 15lh;
      display: flex;
      flex-direction: column;
   }

   h2 {
      margin-top: 0em;
   }

   #slide-element-example {
      color: white;
      border: 1px solid lightgreen;
      padding: 1em;
      flex-grow: 1;
   }
</style>
