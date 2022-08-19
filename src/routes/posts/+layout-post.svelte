<script lang="ts">
	import './post.css'

	export let data: { post: Post }
	$: ({ post } = data)
</script>

<article class="card px-8 py-6">
	<header class="h1 mt-4 underline underline-offset-2">{post.title}</header>
	<div class="markdown">{@html post.html}</div>
</article>
