<script lang="ts">
   import { MarkdownIt, slideLock, CodeEditor, typewriter, CodeLines } from '$lib/index.js'
   import content1 from './content/extract-learning-1.md?raw'
   import content2 from './content/extract-learning-2.md?raw'
   import content3 from './content/extract-learning-3.md?raw'
   import content4 from './content/extract-learning-4.md?raw'

   let phase = $state(0)
   let complete = $state(false)
   const contents = [ content1, content2, content3, content4 ]
   const content = $derived(contents[phase])

   let code = $state('')
   let code1 = $state('Hello there')
   let code2 = $state('General Kenobi')

   const outputs = {
      ["children()"]: "error: Cannot read properties of undefined (reading 'before')",
      ["children({ before: null })"]: "error: anchor.before is not a function",
      ["children({ before: (...args) => console.dir(args) })"]: "logs either Nodes or a DocumentFragment",
   }

   const output = $derived(code in outputs ? outputs[code as keyof typeof outputs] : '')

   function prev() {
      if (phase === 0) return true
      phase = Math.max(0, phase-1);
   }

   function next() {
      if (phase === 3) return true
      phase = Math.min(3, phase+1)
   }
</script>
<!--
<div id="markdown" class="markdown" {@attach slideLock(complete, prev, next)}>
   {#if phase === 0}
      <MarkdownIt content={content1} />
   {:else if phase === 1}
      <MarkdownIt content={content2} />
   {:else if phase === 2}
      <MarkdownIt content={content3} />
   {:else}
      <MarkdownIt content={content4} />
   {/if}
</div> -->

<div id="editor">
   <CodeLines numLines={3} />
</div>

<div id="console" class="console" {@attach typewriter(output, 40)}></div>

<!-- <div id="note">
   {#if phase === 0}
      If this is how we normally render snippets, then can we...
   {/if}
</div> -->

<template>
   <p>Ordinarily you render a snippet with render children(). So what if I just call that in my script tag?</p>
   <p>Use Svelte Playground iframe - show process until Node or DocumentFragment.</p>
   <p>render, in script tag, passing object with before, passing object with before function.</p>
   <p>Create an OL of textareas... maybe can use CodeInput for each line? Can make some static then and hover.</p>
   <p>Create a console output object to embed color info.</p>
</template>

<style>
   /*#markdown {
      place-self: center;
      font-size: 2rem;
      text-align: left;
      width: 60cqw;
   }*/

   #editor {
      place-self: center;
      transform: translateY(-5cqh);
      border: 1px solid grey;
      /*padding: 1em;*/
      color: white;
      font-size: 2rem;
   }

   #console {
      place-self: center;
      transform: translateY(15cqh);
      width: 50ch;
      height: 3em;
   }
</style>
