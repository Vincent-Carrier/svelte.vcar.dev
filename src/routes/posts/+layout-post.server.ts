import type { Load } from '@sveltejs/kit'
import fs from 'fs/promises'
import MarkdownIt from 'markdown-it'
import attrs from 'markdown-it-attrs'
import { resolve } from 'path'
import shiki from 'shiki'

const highlighter = await shiki.getHighlighter({ theme: 'github-light' })

const md = new MarkdownIt({
	html: true,
	typographer: true,
	highlight(code, lang) {
		return highlighter.codeToHtml(code, { lang })
	},
}).use(attrs)

export const load: Load = async function ({ url }) {
	const path = resolve(`./src/routes${url.pathname}/index.md`)
	const f = await fs.readFile(path, { encoding: 'utf-8' })
	const html = md.render(f)
	const { frontmatter } = await import(`./${url.pathname.replace('/posts/', '')}/+page@post.svelte`)

	return { post: { html, ...frontmatter } as Post }
}
