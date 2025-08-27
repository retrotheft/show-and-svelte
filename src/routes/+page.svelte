<script lang="ts">
   import "../app.css";

   import { Stage } from "$lib/index.js";
   import Title from './_slides/Title.svelte'

   import { PresentationViewer } from '$lib/index.js'
</script>

<div>
   <Stage>
      <Title />
   </Stage>
</div>
<!-- <PresentationViewer /> -->

<style>
   div {
      border: 1px solid grey;
   }
</style>
