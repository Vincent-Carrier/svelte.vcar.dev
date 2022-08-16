type Post = {
	html: string
} & Frontmatter

type PostPreview = {
	slug: string
} & Frontmatter

type Frontmatter = {
	title: string
	published: string
	summary: string
}
