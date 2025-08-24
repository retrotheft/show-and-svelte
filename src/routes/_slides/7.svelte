<script lang="ts">
   import { movable } from '$lib/attachments/movable.js'
   import { typewriter } from '$lib/vfx/typewriter.js';
</script>

<template>
   <div id="svelte" {@attach typewriter("Wheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", 150)} {...movable}></div>
   <div id="clapper"></div>
</template>

<style>
   div#svelte {
      position: absolute;
      transform: translate(10vh, 30vh);
      color: yellow;
      width: 30ch;
      cursor: move;
   }

   div#clapper{
      opacity: 0;
      place-self: center;
      transform: scale(5);
      width: 11ch;
   }
</style>
