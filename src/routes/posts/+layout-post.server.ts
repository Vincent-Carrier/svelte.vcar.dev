import type { Load } from '@sveltejs/kit'
import fs from 'fs/promises'
import { resolve } from 'path'
import md from './markdown'

export const load: Load = async function ({ url }) {
	const path = resolve(`./src/routes${url.pathname}/index.md`)
	const f = await fs.readFile(path, { encoding: 'utf-8' })
	const html = (await md.process(f)).toString()
	const { frontmatter } = await import(`./${url.pathname.replace('/posts/', '')}/+page@post.svelte`)

	return { post: { html, ...frontmatter } as Post }
}
