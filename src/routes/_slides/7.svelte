<script lang="ts">
   // import { movable } from '$lib/attachments/movable.js'
   import { movable } from 'attach-this'
   import { typewriter } from '$lib/vfx/typewriter.js';
</script>

<div id="svelte" {@attach typewriter("Wheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", 150)} {...movable} data-position="absolute" data-display="block"></div>
<div id="clapper2"></div>

<style>
   div#svelte {
      position: absolute;
      transform: translate(10vh, 30vh);
      color: yellow;
      width: 30ch;
      cursor: move;
   }

   div#clapper2 {
      opacity: 0;
      place-self: center;
      transform: scale(5);
      width: 11ch;
   }
</style>
