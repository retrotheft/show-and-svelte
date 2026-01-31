<script lang="ts">
   import { typewriter } from "$lib/vfx/typewriter.js";
   import type { LogType } from "$lib/index.js";

   let { log }: { log?: LogType} = $props()
</script>

{#key log}
   <div style={`--color: ${log?.color ?? 'white'};`} class="console" {@attach typewriter(log?.text ?? ' ', 5)}></div>
{/key}
