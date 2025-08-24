<script lang="ts">
   import { typewriter } from '$lib/vfx/typewriter.js';
</script>

<template>
   <div id="svelte" {@attach typewriter("This video was made with Svelte")}></div>
   <div id="view">No, it's not using view transitions.</div>
</template>

<style>
   * {
      position: absolute;
   }

   div#svelte {
      color: orangered;
      place-self: center;
      width: 30ch;
      text-align: center;
   }

   div#view {
      place-self: end center;
      transform: translateY(100%);
      color: violet;
      width: 30ch;
      opacity: 0;
   }
</style>
