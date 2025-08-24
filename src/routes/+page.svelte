<script lang="ts">
   import "../app.css";

   import { Stage } from "$lib/index.js";
   import Scene0 from './_slides/0.svelte'
   import Scene1 from "./_slides/1.svelte";
   import Scene2 from "./_slides/2.svelte";
   import Scene3 from "./_slides/3.svelte";
   import Scene4 from "./_slides/4.svelte"
</script>

<Stage>
   <Scene0 />
   <Scene1 />
   <Scene2 />
   <Scene3 />
   <Scene4 />
</Stage>
