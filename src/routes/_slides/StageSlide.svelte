<script lang="ts">
   import { MarkdownIt } from '$lib/index.js'
   import content from './content/babys-first-slide.md?raw'
   import { tooltip } from '$lib/attachments/tooltip.js';
</script>

<div id="subtitle" {@attach tooltip("Hello there")}>Stage</div>
<!-- <div id="markdown">
   <MarkdownIt {content} />
</div> -->


<style>
   #subtitle {
      place-self: center;
      color: cornflowerblue;
      width: 18ch;
      transform: translate(13cqw, -5cqh);
      font-size: 5em;
      text-align: center;
   }
</style>
