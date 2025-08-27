<script lang="ts">
   import { reactiveProperties } from "$lib/index.js";

   const custom = $state({
      opacity: 0,
      transform: ""
   })

   let complete = $state(false)

   function onkeydown(event: KeyboardEvent) {
      if (event.code !== "KeyD") return
      if (!complete) event.stopPropagation()
      custom.transform = "translateY(-33cqh)"
      custom.opacity = 1
      complete = true
   }
</script>

<svelte:window {onkeydown} />

<div id="title">Show & Svelte</div>
<div id="subtitle" data-text-align="center" {@attach reactiveProperties(custom)}>Tutorial (v0.0.3)</div>

<style>
   div#title {
      color: white;
      place-self: center;
      white-space: nowrap;
      font-size: 7em;
      width: 13ch;
   }

   div#subtitle {
      place-self: end center;
      color: white;
      opacity: 0;
      width: 18ch;
      font-size: 5em;
   }
</style>
