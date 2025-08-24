<script lang="ts">
   import { typewriter } from '$lib/vfx/typewriter.js'
</script>

<template>
   <div id="view" {@attach typewriter("The rest is magic.")}></div>
</template>

<style>
   * {
      position: absolute;
   }

   div#view {
      transform: translate(10vh, 30vh);
      color: cornflowerblue;
      width: 30ch;
      cursor: move;
   }
</style>
