<script lang="ts">
   import { typewriter } from '$lib/vfx/typewriter.js'
</script>

<div id="view"></div>
<div id="svelte" {@attach typewriter("Well, one more thing.")}></div>
<div id="code"></div>

<style>
   div#view {
      place-self: center;
      transform: translate(-3ch, -100%);
      color: violet;
      width: 30ch;
      white-space: nowrap;
      line-height: 1lh;
   }

   /*div#view::before {
      content: '\200B';
   }*/

   div#svelte {
      transform: translate(10vh, 30vh);
      color: #ccc;
      width: 30ch;
      cursor: move;
   }

   div#code {
      top: 5ch;
      bottom: 5ch;
      right: 5ch;
      width: 10ch;
      border: 1px solid grey;
      transform: translateX(150%);
      opacity: 0;
   }
</style>
