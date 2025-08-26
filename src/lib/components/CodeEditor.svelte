<script lang="ts">
   import CodeInput from "../code-input/CodeInput.svelte";
   import { createAutoCloseBracketsPlugin } from "../code-input/auto-close-brackets.js";
   import { createIndentPlugin } from "../code-input/indent.js";
   import { getHljsContext } from "$lib/contexts/hljs.js";

   let {
      code = $bindable(),
      language,
      template,
      placeholder = "",
      theme,
   }: {
      code: string;
      language: string;
      template: string;
      placeholder?: string;
      theme?: string;
   } = $props();
   
   const hljs = getHljsContext();

   // Create plugins using TypeScript functions
   const plugins = $derived(() => {
      const pluginList = [];
      
      // Auto-close brackets plugin
      pluginList.push(createAutoCloseBracketsPlugin({
         '(': ')', 
         '[': ']', 
         '{': '}', 
         '"': '"',
         "'": "'"
      }));
      
      // Indent plugin
      pluginList.push(createIndentPlugin(
         true,  // useSpaces
         2,     // indentSize
         { '(': ')', '[': ']', '{': '}' }  // bracketPairs
      ));
      
      return pluginList;
   });

   // Highlighter function using hljs
   function highlighter(code: string, language?: string): string {
      if (!hljs) return code;
      
      try {
         if (language && hljs.getLanguage(language)) {
            return hljs.highlight(code, { language }).value;
         } else {
            return hljs.highlightAuto(code).value;
         }
      } catch (error) {
         console.warn('Highlighting failed:', error);
         return code;
      }
   }

   function handleInput(event: Event) {
      event.stopPropagation();
   }

   function handleKeydown(event: KeyboardEvent) {
      event.stopPropagation();
   }
</script>

{#if hljs}
   <CodeInput
      bind:value={code}
      {language}
      {placeholder}
      {highlighter}
      plugins={plugins()}
      oninput={handleInput}
      onkeydown={handleKeydown}
   />
{:else}
   <div class="loading-placeholder">CodeEditor requires hljs object.</div>
{/if}

<style>
   :global(.code-input) {
      width: 100% !important;
      height: 100% !important;
      margin: 0 !important;
      box-sizing: border-box;
      font-size: 1rem;
   }

   .loading-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: monospace;
      color: #666;
      background: #f5f5f5;
      border-radius: 4px;
   }
</style>
