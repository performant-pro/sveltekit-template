import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],

	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx', '.md']
		})
	],

	kit: {
		adapter: adapter({
			// Default options — override per project if needed
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		alias: {
			$components: 'src/components',
			$styles: 'src/styles'
		}
	}
};

export default config;
