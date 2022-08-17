<script lang="ts">
	import 'highlight.js/styles/github.css'
	import type { PageData } from './$types'

	export let data: PageData
	$: post = data.post
</script>

<article class="card px-8 py-6">
	<header class="h1 mt-4 underline underline-offset-2">{post.title}</header>
	<div class="markdown">{@html post.html}</div>
</article>

<style lang="postcss">
	.markdown {
		@apply prose-xl prose-stone font-serif;
	}

	.markdown :global(p) {
		@apply leading-8;
	}
	.markdown :global(h2) {
		@apply font-mono text-cyan-700 font-medium text-2xl mb-2;
	}
	.markdown :global(pre) {
		@apply border bg-gray-50 shadow-sm;
		line-height: theme('lineHeight.snug') !important;
	}
</style>
