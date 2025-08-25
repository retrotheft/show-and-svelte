<script lang="ts">
   import hljs from 'highlight.js/lib/core';
   import Javascript from "highlight.js/lib/languages/javascript"
   import Css from "highlight.js/lib/languages/css"
   import Xml from "highlight.js/lib/languages/xml"
   import CodeEditor from '$lib/components/CodeEditor.svelte'

   let { code = $bindable(), ...props }: { language: string, template: string, code: string } = $props()

   const languages = {
      css: Css,
      html: Xml,
      javascript: Javascript
   }

   Object.entries(languages).forEach(([name, language]) => {
     hljs.registerLanguage(name, language);
   });
</script>

<CodeEditor {...props} {code} {hljs} />
