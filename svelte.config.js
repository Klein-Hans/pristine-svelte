/* jshint esversion: 11 */

// Imports
import preprocess from 'svelte-preprocess';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Adapters
import vercelAdapter from '@sveltejs/adapter-vercel';

// Custom require function as replacement for the require from the commonJS in ES Module

// Custom __dirname as replacement for the __dirname from the commonJS in ES Module
const __dirname = dirname(fileURLToPath(import.meta.url)); // jshint ignore:line

const options = JSON.stringify(process.env.OPTIONS || '{}');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			// postcss: true,
			preserve: ['ld+json', 'module'],
			typescript: true
		})
	],

	kit: {
		adapter: vercelAdapter(options),
		prerender: {
			concurrency: 1,
			crawl: true,
			enabled: true,
			onError: 'fail',
			entries: ['*']
		},
		vite: {
			resolve: {
				alias: {
					$components: resolve('./src/components'),
					$store: resolve('./src/store'),
					$hooks: resolve('./src/hooks'),
					$helpers: resolve('./src/helpers'),
					$styles: resolve('./src/styles'),
					$assets: resolve('./src/assets')
					// $models: resolve(__dirname, './src/lib/models'),
					// $data: resolve(__dirname, './src/lib/data'),
					// $environment: resolve(__dirname, './src/environments')
				}
			},
			envPrefix: ['VITE_', 'SVELTEKIT_STARTER_'],
			plugins: []
		}
	}
};

export default config;
