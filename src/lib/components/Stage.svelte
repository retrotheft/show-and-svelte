<script lang="ts" module>
   export const stageState = $state<{ updates: number[] }>({
      updates: [],
   })
</script>

<script lang="ts">
   import { onMount, type Snippet } from "svelte";
   import Mark from './Mark.svelte'

   import '$lib/assets/stage.css'
   import { extractMarkIds, createSnippetMap } from "$lib/functions/stage.js";

   let { children, width = "1940", height = "1100", size = 5, transitionTimeout = 32 } = $props();

   let currentScene = $state(0);
   let transitionsReady = $state(false)

   const [ markIds, slideCount ] = extractMarkIds(children)
   let snippetMap = $state.raw<Map<string, Snippet>>()
   onMount(() => snippetMap = createSnippetMap(children));

   function nextScene(value: number = 1) {
      stageState.updates.push(Date.now())
      currentScene = Math.max(0, Math.min(slideCount - 1, currentScene + value));
   }

   function onkeydown(event: KeyboardEvent) {
      if (event.code === "ArrowLeft" || event.code === "KeyA") return nextScene(-1);
      if (event.code === "ArrowRight" || event.code === "KeyD") return nextScene(1);
   }

   // $effect(() => {
   //    // prevents FOUC
   //    setTimeout(() => transitionsReady = !!snippetMap, transitionTimeout)
   // })
</script>

<svelte:window {onkeydown} />

<div id="stage-container" style={`--width: ${width}px; --height: ${height}px;`}>
   <div id="stage">
   {#each markIds as id}
      <Mark {id} snippet={snippetMap?.get(`${currentScene}#${id}`)}>
      <!-- <div id={markId} data-mark="true" data-ready={transitionsReady}>
         {#if snippetMap?.has(`${currentScene}#${markId}`)}
            {@const snippet = snippetMap.get(`${currentScene}#${markId}`)}
            {@render snippet?.()}
         {/if}
      </div> -->
      </Mark>
   {/each}
   </div>
</div>
<!--
<div id="stage-container" style={`--width: ${width}px; --height: ${height}px;`}>
   <div id="stage">
   {#each markIds as markId}
      <div id={markId} data-mark="true" data-ready={transitionsReady}>
         {#if snippetMap?.has(`${currentScene}#${markId}`)}
            {@const snippet = snippetMap.get(`${currentScene}#${markId}`)}
            {@render snippet?.()}
         {/if}
      </div>
   {/each}
   </div>
</div> -->
