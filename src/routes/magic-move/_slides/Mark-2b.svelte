<script lang="ts">
   import { Console, CodeEditor } from '$lib/index.js'
</script>

<div id="editor">
   <CodeEditor code="" rows={14} indentSize={3} />
</div>

<div id="mark-example">
   <h2>Persistent Element (the 'Mark')</h2>
   <footer>class="s-WTVhqYgRzQyQ"</footer>
</div>
<div id="slide-element-1">Element from Slide 1</div>
<div id="slide-element-2">Element from Slide 2</div>

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
      color: lightgreen;
      border: 5px dashed grey;
      padding: 1em;
      font-size: 1.5rem;
      text-align: center;
      width: 40ch;
      transform: translate(10cqw, 10cqh);
      /*interpolate-size: allow-keywords;*/
      height: 13lh;
   }

   h2 {
      margin-top: 0em;
   }

   #slide-element-1 {
      color: white;
      background: lightcoral;
      padding: 1em;
      transform: translate(-100cqw, 100cqh);
   }

   #slide-element-2 {
      color: black;
      background-color: lightgreen;
      padding: 1em;
      transform: translate(6vw, 10vh);
      font-size: 2rem;
   }
</style>
