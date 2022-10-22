import type { PageServerLoad } from './$types'
import { allPosts } from './(posts)/markdown'

export const load: PageServerLoad<{ posts: Frontmatter[] }> = async function () {
	const imports = allPosts()
	const modules = await Promise.all(Object.values(imports).map(f => f()))
	const posts = modules.map((m: any) => m.frontmatter) as Frontmatter[]
	Object.keys(imports).forEach((path, i) => {
		const [slug] = path.match(/^\.\/(.*)\//) as string[]
		posts[i].slug = slug
	})

	return { posts }
}
