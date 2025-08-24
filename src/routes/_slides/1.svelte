<script lang="ts">
   import { typewriter } from '$lib/vfx/typewriter.js';
</script>

<template>
   <div id="svelte" {@attach typewriter("This presentation was made with Svelte")}></div>
   <div id="view">Here's how it works.</div>
</template>

<style>
   div#svelte {
      color: orangered;
      place-self: center;
      width: 34ch;
      text-align: center;
   }

   div#view {
      place-self: end center;
      transform: translateY(100%);
      color: violet;
      width: 34ch;
      opacity: 0;
   }
</style>
