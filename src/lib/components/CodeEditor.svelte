<script lang="ts">
   import { onMount } from "svelte";
   import { initializeCodeInput, type CodeInput } from "../code-input/index.js";
   import { type HLJSApi } from "$lib/types/hljs.js";

   let {
      code = $bindable(),
      language,
      template,
      placeholder = "",
      theme,
      hljs,
   }: {
      code: string;
      language: string;
      template: string;
      placeholder?: string;
      theme?: string;
      hljs?: HLJSApi;
   } = $props();

   let codeInput: CodeInput | null = null;
   let isInitialized = $state(false);

   onMount(async () => {
      try {
         console.log(
            "CodeEditor onMount - template:",
            template,
            "slide location:",
            window.location.pathname,
         );
         codeInput = await initializeCodeInput(theme);
         console.log("CodeInput initialized successfully");
         setupHighlighting(template);
         console.log("Template setup complete");
         isInitialized = true;
      } catch (error) {
         console.error("Failed to initialize code-input:", error);
         if (error instanceof Error)
            console.error("Error details:", error.message);
      }
   });

   function setupHighlighting(templateName: string) {
      if (!codeInput || !hljs) return;

      codeInput.registerTemplate(
         templateName,
         codeInput.templates.hljs(hljs, [
            new codeInput.plugins.Indent(true, 2),
            new codeInput.plugins.AutoCloseBrackets(),
         ]),
      );
   }

   function oninput(
      event: KeyboardEvent & { currentTarget: HTMLInputElement },
   ) {
      event.stopPropagation();
      code = event.currentTarget.value;
   }

   function onkeydown(event: InputEvent & { currentTarget: HTMLInputElement }) {
      event.stopPropagation();
   }
</script>

{#if isInitialized && hljs}
   <code-input
      id="code"
      {language}
      {template}
      {placeholder}
      {oninput}
      {onkeydown}
      role="textbox"
      tabindex="0">{code}</code-input
   >
{:else if !hljs}
   <div class="loading-placeholder">CodeEditor requires hljs object.</div>
{:else}
   <div class="loading-placeholder">Loading code editor...</div>
{/if}

<style>
   :global(code-input#code) {
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
