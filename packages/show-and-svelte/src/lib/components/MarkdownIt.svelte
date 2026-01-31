<script lang="ts">
   import markdownit from "markdown-it";
   import { getHljsContext } from "$lib/contexts/hljs.js";
   import tooltipPlugin from "$lib/plugins/tooltip.js";
   import { onMount } from 'svelte'

   let { content }: { content: string } = $props();

   const hljs = getHljsContext();
   let md = $state.raw();
   let markdown = $state.raw();

   function initMd() {
      const md = !hljs
         ? markdownit()
         : markdownit({
              highlight: function (str, lang) {
                 if (lang && hljs.getLanguage(lang)) {
                    try {
                       return hljs.highlight(str, { language: lang }).value;
                    } catch (__) {}
                 }

                 return "";
              },
           });
      md.use(tooltipPlugin);
      markdown = md.render(content);
   }

   onMount(() => initMd())
</script>

<div class="markdown-it">
   {@html markdown}
</div>

<style>
   div.markdown-it {
      line-height: 1.5em;
      text-align: left;
   }
</style>
