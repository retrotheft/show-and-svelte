import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
   plugins: [svelte()],
   build: {
       lib: {
         entry: './src/main.js',
         formats: ['es'],
         fileName: 'bundle',
       },
       rollupOptions: {
         output: {
           assetFileNames: 'bundle.css'
         }
       }
     }
})
