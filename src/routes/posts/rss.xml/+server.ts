import type { RequestHandler } from '@sveltejs/kit'
import RSS from 'rss'
import { load } from '../+page.server'

const feed = new RSS({
	title: 'vcar.dev',
	description: "Vincent Carrier's Blog",
	site_url: 'https://vcar.dev/',
	feed_url: 'https://vcar.dev/posts/rss.xml',
})

const res = await load(undefined!)
for (const post of res!.posts) {
	feed.item({
		title: post.title,
		description: post.summary,
		url: `https://vcar.dev/posts/${post.slug}`,
		date: post.date,
	})
}

export const GET: RequestHandler = function () {
	return new Response(feed.xml(), {
		headers: {
			'Content-Type': 'application/xml',
		},
	})
}
