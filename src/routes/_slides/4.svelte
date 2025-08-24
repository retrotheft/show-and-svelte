<script lang="ts">
   import { typewriter } from '$lib/vfx/typewriter.js'
</script>

<template>
   <div id="view"></div>
   <div id="svelte">Instructions</div>
   <div id="code" {@attach typewriter("1. Create slides from Svelte components.")}></div>
</template>

<style>
   div#view {
      color: lightgreen;
      place-self: start center;
      transform: translateY(30vh);
      white-space: nowrap;
      width: 30ch;
      opacity: 0;
   }

   div#svelte {
      color: lightgreen;
      place-self: start center;
      transform: translateY(30vh);
      white-space: nowrap;
      width: 30ch;
   }

   div#code {
      top: 1ch;
      bottom: 1ch;
      right: 1ch;
      width: 50ch;
      border: 1px solid grey;
      color: white;
      font-size: 2rem;
      text-align: left;
      padding: 1em;
      font-family: monospace;
   }
</style>
