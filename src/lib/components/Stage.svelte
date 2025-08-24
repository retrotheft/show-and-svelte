<script lang="ts" module>
   export const stageState = $state({
      updates: 0,
      codeActive: false
   })
</script>

<script lang="ts">
   import { extractTemplatesFromChildren } from "$lib/functions/extract.js";
   import { setupSceneActorSet, setupSceneMap, setupVirtualStage, setupMarks, transferStylesToMarks, restoreElementsFromMarks, createSceneController } from "$lib/functions/stage.js";
   import { onMount } from "svelte";
   import { SvelteMap } from "svelte/reactivity";

   let angle = $state(0)
   let codeActive = $state(false)

   let { children } = $props();

   let currentScene = $state(0);
   let stageElement = $state<HTMLElement>();
   let actorsDiv = $state<HTMLDivElement>()

   const templates = extractTemplatesFromChildren(children);
   const sceneMap: SvelteMap<number, HTMLElement[]> = setupSceneMap(templates);

   console.log("First scene elements after setup:",
      sceneMap.get(0)?.map(el => el.id + " " + el.tagName)
   );
   const sceneActorSet = setupSceneActorSet(sceneMap);
   let virtualStage = $state.raw<HTMLElement>();
   const marks = $state.raw<HTMLElement[]>(setupMarks(sceneActorSet));
   const setVirtualStage = (element: HTMLElement) => virtualStage = element;

   const nextSceneController = createSceneController(
      sceneMap,
      (sceneNumber) => restoreElementsFromMarks(marks, sceneNumber, sceneMap),
      stageState
   );

   onMount(() => {
      if (!stageElement || !virtualStage) return;
      stageElement.appendChild(virtualStage);
      marks.forEach(mark => stageElement?.appendChild(mark));
      hitMarks();
   });

   function hitMarks() {
      const scene = sceneMap.get(currentScene);
      if (!scene || !virtualStage) return;
      transferStylesToMarks(scene, virtualStage, marks, stageState);
      console.log("Scene elements:", scene.map(el => el.id + " " + el.tagName));
   }

   $effect(() => {
      console.log(sceneMap)
      // hitMarks();
   });

   // onMount(() => {
   //    hitMarks()
   // })

   function nextScene(value: number = 1) {
      currentScene = nextSceneController(currentScene, value);
      hitMarks()
   }

   function onkeydown(event: KeyboardEvent) {
      if (event.code === "ArrowLeft") return nextScene(-1);
      if (event.code === "ArrowRight") return nextScene(1);
      if (event.code === "ArrowUp") return console.log(sceneMap)
   }
</script>

<svelte:window {onkeydown} />

<main bind:this={stageElement} {@attach setupVirtualStage(setVirtualStage)} style={`--angle: ${angle}deg;`}>
   {@render children?.()}
</main>

<!-- {stageState.codeActive} -->

{#if stageState.codeActive}
   <div>THIS IS THE CODE VIEWER</div>
{/if}

<style>
   main {
      /*box-sizing: border-box;*/
      position: relative;
      width: 100vw;
      height: 100vh;
      width: 1940px;
      height: 1100px;
      border: 1px solid grey;
      display: grid;
      /*place-items: center;*/
      background-color: black;

   }

   :global([data-actor]) {
      transition: all 0.5s linear;
      position: absolute;
      display: flex;
      /*align-items: center;*/
      /*justify-content: center;*/
      opacity: 0;
   }

   :global([data-actor].ready) {
      opacity: 1;
   }

   :global(#virtual-stage) {
      position: absolute;
      inset: 0;
      z-index: -1;

      > * {
         position: absolute;
      }
   }
</style>
