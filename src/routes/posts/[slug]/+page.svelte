<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
	$: ({ post } = data)
</script>

<article class="card p-8">
	<header class="h1">{post.title}</header>
	<div class="prose-xl font-serif">{@html post.html}</div>
</article>
