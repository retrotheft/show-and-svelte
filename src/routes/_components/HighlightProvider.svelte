<script lang="ts">
  import hljs from 'highlight.js/lib/core';
  import Javascript from "highlight.js/lib/languages/javascript"
  import Css from "highlight.js/lib/languages/css"
  import Xml from "highlight.js/lib/languages/xml"
  import { setHljsContext } from '$lib/contexts/hljs.js';
  import { type Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();

  hljs.registerLanguage("css", Css)
  hljs.registerLanguage("html", Xml)
  hljs.registerLanguage("javascript", Javascript)

  setHljsContext(hljs)
</script>

<svelte:head>
   <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.css" />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark-dimmed.css" /> -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tokyo-night-dark.css" />
</svelte:head>

{@render children()}
