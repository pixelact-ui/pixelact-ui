import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import mdx from '@mdx-js/rollup'
import rehypeHighlight from 'rehype-highlight';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), mdx({
    rehypePlugins: [rehypeHighlight]
  }),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
})
