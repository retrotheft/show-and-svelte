<script lang="ts">
   import { typewriter } from '$lib/vfx/typewriter.js'
</script>

<div id="svelte" {@attach typewriter("The rest is magic.")}></div>

<style>
   div#svelte {
      transform: translate(10vh, 30vh);
      color: cornflowerblue;
      width: 30ch;
      cursor: move;
   }
</style>
