<script lang="ts">
   import "../app.css";

   import { Stage } from "$lib/index.js";
   import Scene1 from "./_slides/1.svelte";
   import Scene2 from "./_slides/2.svelte";
   import Scene3 from "./_slides/3.svelte";
</script>

<Stage>
   <Scene1 />
   <Scene2 />
   <Scene3 />
</Stage>
