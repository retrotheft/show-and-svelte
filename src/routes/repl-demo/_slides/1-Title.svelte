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

<div id="title" {@attach slideLock(complete, prev, next)}>Svelte REPL</div>
<div id="subtitle">Building an Interactive Code Playground</div>
<div id="markdown">
   <MarkdownIt content="" />
</div>

<style>
   div#title {
      color: #ff3e00;
      place-self: center;
      transform: scale(7);
      text-align: center;
      -webkit-font-smoothing: antialiased;
      will-change: transform;
   }

   div#subtitle {
      place-self: center;
      transform: translateY(10cqh) scale(4);
      color: white;
      opacity: var(--subtitle-opacity);
      text-align: center;
   }

   #markdown {
      place-self: center end;
      width: 45cqw;
      font-size: 2em;
      opacity: 0;
   }
</style>