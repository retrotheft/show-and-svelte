<script lang="ts">
   import { MarkdownIt, CodeEditor } from '$lib/index.js'
   import content from './content/babys-first-slide.md?raw'

   let code = $state(`const message = "Hello"`)
</script>

<div id="subtitle">Baby's First Slide</div>
<div id="markdown" class="markdown">
   <MarkdownIt {content} />
</div>
<!-- <div id="code">
   <CodeEditor bind:code />
</div> -->

<style>
   #subtitle {
      place-self: center;
      color: violet;
      transform: translate(-23cqw, -0.5lh) scale(7);
      text-align: center;
   }

   #markdown {
      place-self: center end;
      font-size: 3em;
      color: white;
      width: 40cqw;
   }

   /*#code {
      border: 1px solid grey;
      background-color: #111;
      place-self: start end;
      height: 100%;
      font-size: 3em;
      color: white;
      width: 40cqw;
   }*/
</style>
