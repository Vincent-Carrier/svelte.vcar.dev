import type { Load } from '@sveltejs/kit'

export const prerender = true

export const load: Load = async function ({ url }) {
	return { url: url.href }
}
