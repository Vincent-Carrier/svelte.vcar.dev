import fs from 'fs/promises'
import graymatter from 'gray-matter'
import hljs from 'highlight.js'
import { DateTime } from 'luxon'
import MarkdownIt from 'markdown-it'
import attrs from 'markdown-it-attrs'
import type { PageServerLoad } from './$types'

const md = new MarkdownIt({
	html: true,
	typographer: true,
	highlight: function (str, lang) {
		if (lang && hljs.getLanguage(lang)) {
			try {
				return hljs.highlight(str, { language: lang }).value
			} catch (err) {
				//
			}
		}

		return '' // use external default escaping
	},
}).use(attrs)

export const load: PageServerLoad = async ({ params }) => {
	const body = await fs.readFile(`./posts/${params.slug}.md`, { encoding: 'utf-8' })
	const { content, data } = graymatter(body)
	data.published = DateTime.fromISO(data.date).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
	const html = md.render(content)
	const post = { html, ...data } as Post

	return { post }
}
