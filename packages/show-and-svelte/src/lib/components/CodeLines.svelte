<script lang="ts">
   let { numLines, activeCallback = () => {}, activeLineIndex } = $props()

   const lines = $state(new Array(numLines).fill(''))
</script>

<ol style={`--num-lines: ${numLines};`}>
   {#each lines as line, index}
      <li style={`--line-num: ${index}; --color: ${index === activeLineIndex ? 'lightgreen' : 'grey'}; --bg-color: ${index === activeLineIndex ? '#ccc1' : 'transparent'};`}>
         <button onclick={() => activeCallback(index)}>:)</button>
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
      background-color: var(--bg-color);
   }

   li:before {
      content: counter(line);
      counter-increment: line;
      position: absolute;
      right: calc(100% + 2ch);
      color: var(--color);
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

   button {
      all: unset;
      transform: translateX(-4ch);
      color: transparent;
      cursor: pointer;
   }
</style>
