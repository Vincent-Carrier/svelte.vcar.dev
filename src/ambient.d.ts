type Post = {
	html: string
} & Frontmatter

type PostPreview = {
	slug: string
} & Frontmatter

type Frontmatter = {
	title: string
	date: string // ISO
	published: string // Human-readable
	summary: string
}
