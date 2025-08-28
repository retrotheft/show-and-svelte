<script lang="ts">
   import { MarkdownIt } from '$lib/index.js'
   import content from './content/twins.md?raw'
</script>

<div id="subtitle">Copy and edit</div>
<div id="markdown">
   <MarkdownIt {content} />
</div>


<style>
   #subtitle {
      place-self: center;
      color: cornflowerblue;
      transform: translate(-23cqw, -0.5lh) scale(8);
      text-align: center;
   }

   #markdown {
      place-self: center end;
      width: 40cqw;
      font-size: 3em;
      line-height: 1.5em;
   }
</style>
