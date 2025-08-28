<script lang="ts">
   import { MarkdownIt } from '$lib/index.js'
   import content from './content/babys-first-slide.md?raw'
</script>

<div id="subtitle">Baby's First Slide</div>
<div id="markdown">
   <MarkdownIt {content} />
</div>


<style>
   #subtitle {
      place-self: center;
      color: violet;
      width: 18ch;
      transform: translate(-23cqw, -0.5lh);
      font-size: 5em;
      text-align: center;
   }

   #markdown {
      place-self: center end;
      width: 45cqw;
      font-size: 2em;
   }
</style>
