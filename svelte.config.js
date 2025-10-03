import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

export default {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : (process.env.BASE_PATH || '/glamstitch-company-profile')
    },
    alias: {
      $components: 'src/components',
      $lib: 'src/lib'
    }
  }
};