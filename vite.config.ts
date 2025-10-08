import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
	plugins: [
		tailwindcss(), 
		sveltekit(),
		imagetools()
	],
	assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp'],
	build: {
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					// Organize assets by type
					const info = assetInfo.name?.split('.');
					const ext = info?.[info.length - 1];
					
					if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext || '')) {
						return `assets/images/[name]-[hash][extname]`;
					}
					return 'assets/[name]-[hash][extname]';
				}
			}
		}
	}
});