<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
	$: ({ post } = data)
</script>

<article class="card p-8">
	<header class="h1">{post.title}</header>
	<div class="font-serif prose-xl">{@html post.html}</div>
</article>
