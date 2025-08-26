<script lang="ts">
  import { onMount } from 'svelte';
  import { createHtmlContent } from '$lib/functions/createIframeHtml.js';

  let { presentationName = "presentation" } = $props();
  let iframe: HTMLIFrameElement;

  onMount(async () => {
    try {
      // Load files
      const [js, css] = await Promise.all([
        fetch(`/${presentationName}.js`).then(r => r.text()),
        fetch(`/${presentationName}.css`).then(r => r.text())
      ]);

      // Set iframe content
      iframe.src = 'data:text/html;charset=utf-8,' +
        encodeURIComponent(createHtmlContent(css, js));

    } catch (err) {
      console.error('Load failed:', err);
      iframe.srcdoc = `<div style="padding:40px;color:#666">Error loading presentation</div>`;
    }
  });
</script>

<iframe
  bind:this={iframe}
  sandbox="allow-scripts"
  title="Presentation"
></iframe>

<style>
  iframe {
    width: 1940px;
    height: 1100px;
    background: black;
    /*border: 1px solid grey;*/
  }
</style>
