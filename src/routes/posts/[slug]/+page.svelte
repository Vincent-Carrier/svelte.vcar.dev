<script lang="ts">
	import 'highlight.js/styles/github.css'
	import type { PageData } from './$types'

	export let data: PageData
	$: ({ post } = data)
</script>

<article class="card px-8 py-6">
	<header class="h1 underline underline-offset-2">{post.title}</header>
	<div class="prose-xl font-serif">{@html post.html}</div>
</article>

<style lang="postcss">
	:global(pre) {
		@apply border bg-gray-50 shadow-sm;
		line-height: theme('lineHeight.snug') !important;
	}
</style>