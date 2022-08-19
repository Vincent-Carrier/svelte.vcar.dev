type Frontmatter = {
	slug: string
	title: string
	date: string
	summary: string
}

type Post = { html: string } & Frontmatter