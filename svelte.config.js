import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	},
	preprocess: 
		preprocess({
			postcss: {
				plugins: [
					tailwind,
					autoprefixer
				]
			}
		}),
	
};

export default config;
