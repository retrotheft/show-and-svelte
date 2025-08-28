<script lang="ts">
   import { MarkdownIt } from '$lib/index.js'
   import content from './content/babys-first-slide.md?raw'
</script>

<div id="subtitle">Baby's First Slide</div>
<div id="markdown" class="markdown">
   <MarkdownIt {content} />
</div>

<style>
   #subtitle {
      place-self: center;
      color: violet;
      transform: translate(-23cqw, -0.5lh) scale(7);
      text-align: center;
   }

   .markdown {
      place-self: center end;
      font-size: 3em;
      line-height: 1.5em;
      width: 40cqw;
   }
</style>
