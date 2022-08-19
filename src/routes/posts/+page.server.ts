import type { PageServerLoad } from '.svelte-kit/types/src/routes/posts/$types'

export const load: PageServerLoad<{ posts: Frontmatter[] }> = async function () {
	const imports = import.meta.glob('./*/+page@post.svelte')
	const modules = await Promise.all(Object.values(imports).map(f => f()))
	const posts = modules.map((m: any) => m.frontmatter) as Frontmatter[]
	Object.keys(imports).forEach((path, i) => {
		const [slug] = path.match(/^\.\/(.*)\//) as string[]
		posts[i].slug = slug
	})

	return { posts }
}
