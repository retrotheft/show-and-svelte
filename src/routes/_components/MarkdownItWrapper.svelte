<script lang="ts">
   import hljs from 'highlight.js/lib/core';
   import Javascript from "highlight.js/lib/languages/javascript"
   import Css from "highlight.js/lib/languages/css"
   import Xml from "highlight.js/lib/languages/xml"
   import MarkdownIt from '$lib/components/MarkdownIt.svelte';

   let { content }: { content: string } = $props()

   const languages = {
      css: Css,
      html: Xml,
      javascript: Javascript
   }

   Object.entries(languages).forEach(([name, language]) => {
     hljs.registerLanguage(name, language);
   });
</script>

<svelte:head>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tokyo-night-dark.css" />
</svelte:head>

<MarkdownIt {content} {hljs} />
