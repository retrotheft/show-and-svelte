<script lang="ts">
   import { MarkdownIt } from '$lib/index.js'
   import content from './content/stage-slide.md?raw'
</script>

<div id="subtitle">That's it!</div>
<div id="title">Use A and D or the arrow keys to change slides.</div>
<div id="markdown">
   <MarkdownIt {content} />
</div>
<ul id="bullet-list">
   <li>Always use IDs. Keep styles in scoped components.</li>
   <li>Elements with the same ID will transition.</li>
   <li>Control transitions with before and after elements in surrounding slides.</li>
   <li>Use Container units like cqh and cqw.</li>
   <li>Externalising styles can be unpredictable, especially transforms.</li>
   <li>Advanced Usage Instructions in the github README</li>
   <li>Look at this tutorial's source code!</li>
</ul>

<style>
   #subtitle {
      place-self: center;
      color: lightgreen;
      /*width: 18ch;*/
      transform: scale(8);
      transform-origin: center;
      text-align: center;
   }

   div#title {
      color: #ccc;
      place-self: center;
      transform: translateY(7cqh) scale(3);
      /*width: 13ch;*/
      text-align: center;
   }

   #markdown {
      place-self: center end;
      width: 40cqw;
      font-size: 2em;
      line-height: 1.7lh;
      transform: translateX(100cqmax);
   }

   #bullet-list {
      transform: translateY(5cqh) scale(0);
      color: hsl(45, 80%, 60%);
      place-self: center;
      line-height: 1.5lh;
      transition: all 0.5s linear;
      opacity: 0;
   }
</style>
