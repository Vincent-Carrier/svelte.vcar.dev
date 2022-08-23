import prism from '@mapbox/rehype-prism'
import { h } from 'hastscript'
import stringify from 'rehype-stringify'
import directive from 'remark-directive'
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
	.use(directive)
	.use(htmlDirective)
	.use(rehype)
	.use(prism)
	.use(stringify)
