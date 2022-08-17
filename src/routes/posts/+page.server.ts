import fs from 'fs/promises'
import { globby } from 'globby'
import graymatter from 'gray-matter'
import { DateTime } from 'luxon'
import { basename, dirname, resolve } from 'path'
import type { PageServerLoad } from './$types'

const path = resolve(dirname(new URL(import.meta.url).pathname), './[slug]/')
const paths = await globby(`${path}/**/*.md`)

const buff = Buffer.alloc(1024 * 4)
export const posts = await Promise.all(
	paths.map(async filepath => {
		const fd = await fs.open(filepath)
		await fd.read(buff)
		const chunk = buff.toString()
		console.log(chunk)

		const slug = basename(filepath, '.md')
		const { data } = graymatter(chunk)
		await fd.close()
		data.published = DateTime.fromISO(data.date).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)

		return { slug, ...data } as PostPreview
	})
)

export const load: PageServerLoad = async function () {
	return { posts }
}
