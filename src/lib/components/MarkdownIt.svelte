<script lang="ts">
   import markdownit from "markdown-it"
   import hljs from 'highlight.js/lib/core';
   import Javascript from "highlight.js/lib/languages/javascript"
   import Css from "highlight.js/lib/languages/css"
   import Xml from "highlight.js/lib/languages/xml"

   let { content }: { content: string } = $props()

   const languages = {
      css: Css,
      html: Xml,
      javascript: Javascript
   }

   Object.entries(languages).forEach(([name, language]) => {
     hljs.registerLanguage(name, language);
   });

   const md = markdownit({
     highlight: function (str, lang) {
       if (lang && hljs.getLanguage(lang)) {
         try {
           return hljs.highlight(str, { language: lang }).value;
         } catch (__) {}
       }

       return '';
     }
   });

   const markdown = md.render(content)
</script>

<svelte:head>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tokyo-night-dark.css" />
</svelte:head>

<div class="markdown-it">
   {@html markdown}
</div>

<style>
   div.markdown-it {
      color: white;
   }
</style>
