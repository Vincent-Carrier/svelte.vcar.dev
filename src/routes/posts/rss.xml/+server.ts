import type { RequestHandler } from '@sveltejs/kit'
import { DateTime } from 'luxon'
import RSS from 'rss'
import { posts } from '../+page.server'

const feed = new RSS({
	title: 'vcar.dev',
	description: "Vincent Carrier's Blog",
	site_url: 'https://vcar.dev/',
	feed_url: 'https://vcar.dev/posts/rss.xml',
})

for (const post of posts) {
	feed.item({
		title: post.title,
		description: post.summary,
		url: `https://vcar.dev/posts/${post.slug}`,
		date: DateTime.fromISO(post.date).toJSDate(),
	})
}

export const GET: RequestHandler = function () {
	return new Response(feed.xml(), {
		headers: {
			'Content-Type': 'application/xml',
		},
	})
}
