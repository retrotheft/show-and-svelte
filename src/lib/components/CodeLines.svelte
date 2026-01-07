<script lang="ts">
   import CodeEditor from "./CodeEditor.svelte";

   let { numLines } = $props()

   const lines = $state(new Array(numLines).fill(''))

   const stopPropagation = {
      onkeydown: (e: KeyboardEvent) => e.stopPropagation()
   }

   // hover sends back active line, or whole array is sent back
</script>

<ol style={`--num-lines: ${numLines};`}>
   {#each lines as line, index}
      <li style={`--line-num: ${index};`}>
         <span> </span>
      </li>
   {/each}
</ol>

<style>
   ol {
      margin: 0 !important;
      padding: var(--padding, 16px) !important;
      border: 0;
      grid-row: 1;
      grid-column: 1;

      font-size: inherit;
      font-family: inherit;
      line-height: inherit;
      white-space: pre;

      display: block;
      counter-reset: line;
   }

   li {
      position: relative;
      list-style-type: none;
      display: block;
      box-sizing: border-box;
   }

   li:before {
      content: counter(line);
      counter-increment: line;
      position: absolute;
      right: calc(100% + 2ch);
      color: grey;
      bottom: -0.1em;
      width: 3ch;
      text-align: right;
   }

   li:hover:after {
      content: "⬅";
      color: lightgreen;
      position: absolute;
      right: 0;
   }
</style>
