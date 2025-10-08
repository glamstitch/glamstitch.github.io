import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    paths: {
      base: ''
    },
    alias: {
      $components: 'src/components',
      $lib: 'src/lib'
    }
  }
};