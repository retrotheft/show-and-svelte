<script lang="ts">
   import { MarkdownIt } from '$lib/index.js'
   import content from './content/stage-slide.md?raw'
</script>

<div id="subtitle">Now set it up</div>
<div id="title">Use A and D or the arrow keys to change slides.</div>
<div id="markdown">
   <MarkdownIt {content} />
</div>


<style>
   #subtitle {
      place-self: center;
      color: lightgreen;
      /*width: 18ch;*/
      transform: translate(-23cqw, -0.5lh) scale(7);
      transform-origin: center;
      text-align: center;
   }

   #markdown {
      place-self: center end;
      width: 40cqw;
      font-size: 2.5em;
      line-height: 1.5em;
   }

   div#title {
      color: #ccc;
      place-self: center;
      transform: translateY(100cqh) scale(3);
      /*width: 13ch;*/
      text-align: center;
      opacity: 0;
   }
</style>
