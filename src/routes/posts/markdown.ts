import prism from '@mapbox/rehype-prism'
import { h } from 'hastscript'
import raw from 'rehype-raw'
import stringify from 'rehype-stringify'
import directive from 'remark-directive'
import gfm from 'remark-gfm'
import parse from 'remark-parse'
import rehype from 'remark-rehype'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'

function htmlDirective(): any {
	return tree => {
		visit(tree, node => {
			if (
				node.type === 'textDirective' ||
				node.type === 'leafDirective' ||
				node.type === 'containerDirective'
			) {
				const data = node.data || (node.data = {})
				const hast: any = h(node.name, node.attributes)

				data.hName = hast.tagName
				data.hProperties = hast.properties
			}
		})
	}
}

export default unified()
	.use(parse)
	.use(gfm)
	.use(directive)
	.use(htmlDirective)
	.use(rehype, { allowDangerousHtml: true })
	.use(raw)
	.use(prism)
	.use(stringify, { allowDangerousHtml: true })
