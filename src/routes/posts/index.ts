import type { RequestHandler } from '@sveltejs/kit'
import fs from 'fs/promises'
import { globby } from 'globby'
import graymatter from 'gray-matter'
import { DateTime } from 'luxon'
import MarkdownIt from 'markdown-it'
import path from 'path/posix'

const paths = await globby('./posts/**/*.md')
const files = await Promise.all(
	paths.map(async filepath => {
		const body = await fs.readFile(filepath, { encoding: 'utf-8' })
		return { body, slug: path.basename(filepath, '.md') }
	})
)
const md = new MarkdownIt()

const posts = files.map(f => {
	const { data, content } = graymatter(f.body)
	const html = md.render(content)
	data.published = DateTime.fromISO(data.date).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)

	return { data, slug: f.slug, html }
})
export default posts

export type Post = {
	data: {
		title: string
		published: string
		summary: string
	}
	slug: string
	html: string
}

export const GET: RequestHandler = async () => {
	return {
		body: { posts },
	}
}
