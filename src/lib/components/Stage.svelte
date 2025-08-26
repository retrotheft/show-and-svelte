<script lang="ts" module>
   export const stageState = $state<{ updates: number[] }>({
      updates: [],
   })
</script>

<script lang="ts">
   import { extractSceneMapFromChildren } from "$lib/functions/extract.js";
   import { setupSceneActorSet, setupVirtualStage, setupMarks, transferStylesToMarks, restoreElementIds } from "$lib/functions/stage.js";
   import { onMount } from "svelte";
   import { SvelteMap } from "svelte/reactivity";
   import '$lib/assets/stage.css'

   let { children, width = "1940", height = "1100" } = $props();

   let currentScene = $state(0);
   let stageElement = $state<HTMLElement>()

   const sceneMap: SvelteMap<number, HTMLElement[]> = extractSceneMapFromChildren(children);

   const sceneActorSet = setupSceneActorSet(sceneMap);
   let virtualStage = $state.raw<HTMLElement>();
   const marks = $state.raw<HTMLElement[]>(setupMarks(sceneActorSet));
   const setVirtualStage = (element: HTMLElement) => virtualStage = element;

   onMount(() => {
      if (!stageElement || !virtualStage) return;
      stageElement.appendChild(virtualStage);
      marks.forEach(mark => stageElement?.appendChild(mark));
      hitMarks();
   });

   function hitMarks() {
      const scene = sceneMap.get(currentScene);
      if (!scene || !virtualStage) return;
      transferStylesToMarks(scene, virtualStage, marks);
   }

   function nextScene(value: number = 1) {
      restoreElementIds(marks);
      stageState.updates.push(Date.now());
      currentScene = Math.max(0, Math.min(sceneMap.size - 1, currentScene + value));
      hitMarks();
   }

   function onkeydown(event: KeyboardEvent) {
      if (event.code === "ArrowLeft" || event.code === "KeyA") return nextScene(-1);
      if (event.code === "ArrowRight" || event.code === "KeyD") return nextScene(1);
   }
</script>

<svelte:window {onkeydown} />

<div id="stage" bind:this={stageElement} {@attach setupVirtualStage(setVirtualStage)} style={`--width: ${width}px; --height: ${height}px;`}>
   <!-- {@render children?.()} -->
</div>
