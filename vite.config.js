import { sveltekit } from '@sveltejs/kit/vite'
import icons from 'unplugin-icons/vite'
import { imagetools } from 'vite-imagetools'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), icons({ compiler: 'svelte' }), imagetools()],
}

export default config
