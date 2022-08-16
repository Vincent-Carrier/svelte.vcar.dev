<script lang="ts">
	import type { Post } from '@/routes/posts'

	export let post: Post
</script>

<article class="card p-8">
	<header class="h1">{post.data.title}</header>
	<div class="font-serif">{@html post.html}</div>
</article>