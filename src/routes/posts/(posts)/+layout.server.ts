import type { Load } from '@sveltejs/kit'
import fs from 'fs/promises'
import { resolve } from 'path'
import md from './markdown'

export const load: Load = async function ({ url }) {
	const slug = url.pathname.replace('/posts/', '')
	const path = resolve('src/routes/posts/(posts)/', slug, 'index.md')
	const f = await fs.readFile(path, { encoding: 'utf-8' })
	const html = (await md.process(f)).toString()

	return { post: { html } as Post }
}
