import fs from 'fs/promises'
import graymatter from 'gray-matter'
import hljs from 'highlight.js'
import { DateTime } from 'luxon'
import MarkdownIt from 'markdown-it'
import attrs from 'markdown-it-attrs'
import { dirname, resolve } from 'path'
import type { PageServerLoad } from './$types'

const md = new MarkdownIt({
	html: true,
	typographer: true,
	highlight: function (str, lang) {
		if (lang && hljs.getLanguage(lang)) {
			return hljs.highlight(str, { language: lang }).value
		}

		return ''
	},
}).use(attrs)

export const load: PageServerLoad = async ({ params }) => {
	const path = resolve(dirname(new URL(import.meta.url).pathname), `${params.slug}.md`)
	const body = await fs.readFile(path, { encoding: 'utf-8' })
	const { content, data } = graymatter(body)
	data.published = DateTime.fromISO(data.date).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
	const html = md.render(content)
	const post = { html, ...data } as Post

	return { post }
}
