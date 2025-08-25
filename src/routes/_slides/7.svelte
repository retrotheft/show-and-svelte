<script lang="ts">
   // import { movable } from '$lib/attachments/movable.js'
   import { movable } from 'attach-this'
   import { typewriter } from '$lib/vfx/typewriter.js';
</script>

<div id="svelte" {@attach typewriter("Wheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", 150)} {...movable} data-position="absolute" data-display="block" data-user-select="none"></div>
<div id="clapper2" data-pointer-events="none"></div>
<div id="view"></div>

<style>
   div#view {
      place-self: center;
      transform: translate(-3ch, 100vh);
      color: violet;
      width: 30ch;
      white-space: nowrap;
      line-height: 1lh;
   }

   div#svelte {
      position: absolute;
      transform: translate(10vh, 30vh);
      color: yellow;
      width: 30ch;
      cursor: move;
      background-color: black;
      pointer-events: all;
   }

   div#clapper2 {
      opacity: 0;
      place-self: center;
      pointer-events: none;
      /*visibility: hidden;*/
      transform: scale(5);
      width: 11ch;
   }
</style>
