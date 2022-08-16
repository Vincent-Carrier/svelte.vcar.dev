import type { RequestHandler } from '@sveltejs/kit'
import posts from './index'

export const GET: RequestHandler = async ({ params }) => {
	const post = posts.find(p => p.slug === params.slug)

	return {
		body: { post },
	}
}
