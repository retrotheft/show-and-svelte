<script lang="ts">
   import { typewriter } from '$lib/vfx/typewriter.js'
</script>

<template>
   <div id="svelte" {@attach typewriter("Well, one more thing.")}></div>
   <div id="code"></div>
</template>

<style>
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
