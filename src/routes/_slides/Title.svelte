<script lang="ts">
   import { reactiveProperties } from "$lib/index.js";

   const custom = $state({
      opacity: 0,
      transform: ""
   })

   let complete = $state(false)

   function onkeydown(event: KeyboardEvent) {
      if (event.code === "KeyD") console.log("D pressed in slide")
      if (event.code === "Space") {
         custom.transform = "translateY(-33vh)"
         custom.opacity = 1
         complete = true
      }
      if (!complete) event.stopPropagation()
   }
</script>

<svelte:window {onkeydown} />

<div id="title">Show & Svelte</div>
<div id="subtitle" {@attach reactiveProperties(custom)}>Tutorial (v0.0.3)</div>

<style>
   div#title {
      color: white;
      place-self: center;
      white-space: nowrap;
   }

   div#subtitle {
      place-self: end center;
      color: white;
      opacity: 0;
   }
</style>
