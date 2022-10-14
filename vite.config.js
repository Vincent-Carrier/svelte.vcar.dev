import { sveltekit } from '@sveltejs/kit/vite'
import { globby } from 'globby'
import icons from 'unplugin-icons/vite'
import { imagetools } from 'vite-imagetools'

/** @type {import('vite').Plugin} */
const watcher = {
	name: 'file-watcher',
	async buildStart() {
		for (const f of await globby('./src/**/*.{css,md}')) {
			this.addWatchFile(f)
		}
	},
}

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), icons({ compiler: 'svelte' }), imagetools(), watcher],
	resolve: {
		alias: [
			{
				find: /^sl-(.*)$/,
				replacement: '@shoelace-style/shoelace/dist/components/$1/$1.js',
			},
		],
	},
}

export default config
