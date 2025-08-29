# Show & Svelte Recommended Build Setup

To build your presentation to js/css, modify your vite.config file:

```ts
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: './src/main.js',
      name: 'Presentation',
      fileName: 'presentation',
      formats: ['iife']
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  }
})
```

Name the presentation whatver you like, of course.

Now you can use `npm build` and then load the js/css files from static using the included `PresentationViewer`.
