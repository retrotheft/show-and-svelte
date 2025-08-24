<script lang="ts">
   import { typewriter } from '$lib/vfx/typewriter.js'
</script>

<div id="svelte" {@attach typewriter("Oh, actually that's it.")}></div>
<div id="code">1. Create slides from Svelte components.</div>

<style>
   div#svelte {
      place-self: end center;
      transform: translate(50%, -40vh);
      color: violet;
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
