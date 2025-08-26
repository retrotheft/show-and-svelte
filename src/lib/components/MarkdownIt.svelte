<script lang="ts">
   import markdownit from "markdown-it";
   import { getHljsContext } from "$lib/contexts/hljs.js";

   let { content }: { content: string } = $props();

   const hljs = getHljsContext();

   const md = markdownit({
      highlight: function (str, lang) {
         if (lang && hljs.getLanguage(lang)) {
            try {
               return hljs.highlight(str, { language: lang }).value;
            } catch (__) {}
         }

         return "";
      },
   });

   const markdown = md.render(content);
</script>

<div class="markdown-it">
   {@html markdown}
</div>

<style>
   div.markdown-it {
      color: white;
      line-height: 1.3em;
   }
</style>
