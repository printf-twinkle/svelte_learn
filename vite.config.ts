import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  define: {
    'process.env.POSTGRES_URL': JSON.stringify(process.env.POSTGRES_URL)
  }
});
