<script lang="ts" module>
   import hljs from 'highlight.js/lib/core';
   import Javascript from "highlight.js/lib/languages/javascript"
   import Css from "highlight.js/lib/languages/css"
   import Xml from "highlight.js/lib/languages/xml"

   const languages = {
      css: Css,
      html: Xml,
      javascript: Javascript
   }

   Object.entries(languages).forEach(([name, language]) => {
     hljs.registerLanguage(name, language);
   });
</script>

<script lang="ts">
   import { onMount } from 'svelte'

   let { code = $bindable(), language, template }: { code: string, language: string, template: string } = $props()

   onMount(() => {
      setupHighlighting(template);
   })

   function setupHighlighting(templateName: string) {
      const codeInput = window.codeInput
      codeInput.registerTemplate(
       templateName,
       codeInput.templates.hljs(hljs, [
          new codeInput.plugins.Indent(true, 2),
          new codeInput.plugins.AutoCloseBrackets()
       ])
     );
   }

   function oninput(event: KeyboardEvent & { currentTarget: HTMLInputElement }) {
      event.stopPropagation()
      code = event.currentTarget.value
   }

   function onkeydown(event: InputEvent & { currentTarget: HTMLInputElement }) {
      event.stopPropagation()
   }
</script>

 <code-input id="code" {language} {template} {oninput} {onkeydown} role='textbox' tabindex="0">{code}</code-input>

<style>
	:global(code-input) {
		width: 100% !important;
		height: 100% !important;
		margin: 0 !important;
		box-sizing: border-box;
		font-size: 1rem;
	}
</style>
