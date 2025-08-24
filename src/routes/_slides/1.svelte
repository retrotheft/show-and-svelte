<script lang="ts">
   import { typewriter } from '$lib/vfx/typewriter.js';
</script>

<template>
   <div id="svelte" {@attach typewriter("This video was made with Svelte")}></div>
   <!-- <div id="svelte">This video was made with Svelte</div> -->
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
</style>
