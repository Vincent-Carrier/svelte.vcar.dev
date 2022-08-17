import MarkdownIt from 'markdown-it'
import svelte from 'svelte/compiler'

const md = new MarkdownIt()

/** @return {import('vite').Plugin}  */
export default function mdkit() {
	return {
		name: 'mdkit',
		transform(src, id) {
			if (/\.(md)$/.test(id)) {
				const html = md.render(src)
				const code = svelte.compile(html)

				return { code }
			}
		},
	}
}
