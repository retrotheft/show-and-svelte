<script lang="ts">
   import { getHtml } from '$lib/getHtml'

   const srcdoc = getHtml('create-raw-snippet')
</script>

<!-- <iframe title="presentation" src="index.html"></iframe> -->
<iframe title="presentation" {srcdoc}></iframe>

<style>
   iframe {
      width: 100vw;
      height: 100vh;
   }
</style>
