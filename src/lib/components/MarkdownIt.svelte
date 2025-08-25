<script lang="ts">
   import markdownit from "markdown-it"
   import { type HLJSApi } from "$lib/types/hljs.js";

   let { content, hljs }: { content: string, hljs: HLJSApi } = $props()

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

<div class="markdown-it">
   {@html markdown}
</div>

<style>
   div.markdown-it {
      color: white;
      line-height: 1.3em;

   }
</style>
