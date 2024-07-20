import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    vite: {
      define: {
        'process.env.POSTGRES_URL': JSON.stringify(process.env.POSTGRES_URL)
      }
    }
  }
};

export default config;
