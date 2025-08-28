<script lang="ts">
   import { slideLock } from "$lib/index.js";
   import { MarkdownIt } from '$lib/index.js'

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
<div id="markdown">
   <MarkdownIt content="" />
</div>

<style>
   div#title {
      color: white;
      place-self: center;
      transform: scale(7);
      /*width: 13ch;*/
      text-align: center;
      -webkit-font-smoothing: antialiased;
      /*-webkit-transform: translateZ(0);*/
      will-change: transform;
   }

   div#subtitle {
      place-self: center;
      transform: translateY(10cqh) scale(4);
      color: white;
      opacity: var(--subtitle-opacity);
      /*width: 18ch;*/
      /*font-size: 5em;*/
      text-align: center;
   }

   #markdown {
      place-self: center end;
      width: 45cqw;
      font-size: 2em;
      opacity: 0;
   }
</style>
