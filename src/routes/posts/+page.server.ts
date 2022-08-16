import fs from 'fs/promises'
import { globby } from 'globby'
import graymatter from 'gray-matter'
import { DateTime } from 'luxon'
import path from 'path/posix'
import type { PageServerLoad } from './$types'

const paths = await globby('./posts/**/*.md')
const files = await Promise.all(
	paths.map(async filepath => {
		const body = await fs.readFile(filepath, { encoding: 'utf-8' })
		return { body, slug: path.basename(filepath, '.md') }
	})
)

const posts = files.map(f => {
	const { data } = graymatter(f.body)
	data.published = DateTime.fromISO(data.date).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)

	return { slug: f.slug, ...data } as PostPreview
})

export const load: PageServerLoad = async function () {
	return { posts }
}
