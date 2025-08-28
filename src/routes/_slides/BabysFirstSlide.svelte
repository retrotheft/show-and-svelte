<script lang="ts">
   import { MarkdownIt } from '$lib/index.js'
   import content from './content/babys-first-slide.md?raw'
   import { tooltip } from '$lib/attachments/tooltip.js';
</script>

<div id="subtitle" {@attach tooltip("Hello there")}>Baby's First Slide</div>
<div id="markdown">
   <MarkdownIt {content} />
</div>


<style>
   #subtitle {
      place-self: center;
      color: violet;
      width: 18ch;
      transform: translate(-23cqw, -0.5lh);
      font-size: 7em;
   }

   #markdown {
      place-self: center end;
      width: 45cqw;
      font-size: 3em;
      /*font-size: 2em;*/
   }
</style>
