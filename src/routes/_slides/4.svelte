<script lang="ts">
   import { typewriter } from '$lib/vfx/typewriter.js'
</script>

<template>
   <div id="code" {@attach typewriter("Create slides from Svelte components.")}></div>
</template>

<style>
   * {
      position: absolute;
   }

   div#code {
      top: 1ch;
      bottom: 1ch;
      right: 1ch;
      width: 50ch;
      border: 1px solid grey;
      color: white;
      font-size: 1rem;
      text-align: left;
      padding: 1em;
      font-family: monospace;
   }
</style>
