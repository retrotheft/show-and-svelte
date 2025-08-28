<script lang="ts">
   import { slideLock } from "$lib/index.js";

   const custom = $state({
      opacity: 0,
      transform: ""
   })

   let complete = $state(false)

   function prev() {
      custom.transform = ""
      custom.opacity = 0
      complete = false
   }

   function next() {
      custom.transform = "translateY(-33cqh)"
      custom.opacity = 1
      complete = true
   }
</script>

<svelte:head>
   {@html `<style>
      :root {
         --subtitle-opacity: ${custom.opacity};
      }
   </style>`}
</svelte:head>

<div id="title" {@attach slideLock(complete, prev, next)}>Show & Svelte</div>
<div id="subtitle">Tutorial (v0.0.3)</div>

<style>
   div#title {
      color: white;
      place-self: center;
      white-space: nowrap;
      font-size: 5em;
      width: 13ch;
      text-align: center;
   }

   div#subtitle {
      place-self: center;
      transform: translateY(200%);
      color: white;
      opacity: var(--subtitle-opacity);
      width: 18ch;
      font-size: 5em;
      text-align: center;
   }
</style>
