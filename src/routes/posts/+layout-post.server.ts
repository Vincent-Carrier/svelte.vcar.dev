import fs from 'fs/promises'
import hljs from 'highlight.js'
import MarkdownIt from 'markdown-it'
import attrs from 'markdown-it-attrs'
import { resolve } from 'path'

function highlight(str: string, language: string) {
	if (language && hljs.getLanguage(language)) {
		return hljs.highlight(str, { language }).value
	}

	return ''
}

const md = new MarkdownIt({ html: true, typographer: true, highlight }).use(attrs)

export const load: LayoutServerLoad = async function ({ url }) {
	const path = resolve(`./src/routes${url.pathname}/index.md`)
	const f = await fs.readFile(path, { encoding: 'utf-8' })
	const html = md.render(f)
	const { frontmatter } = await import(`./${url.pathname.replace('/posts/', '')}/+page@post.svelte`)

	return { html, ...frontmatter }
}
