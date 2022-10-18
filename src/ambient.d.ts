type Frontmatter = {
	slug: string
	title: string
	date: string
	summary: string
}

type Post = { html: string }

declare module '@mapbox/rehype-prism'

declare module 'sl-*'