<script lang="ts">
	import 'prism-theme-vars/base.css'
	import './post.css'

	export let data: { post: Post }
	$: ({ post } = data)
</script>

<article class="card px-8 py-6 sm:w-screen sm:px-4">
	<header class="h1 mt-4 underline underline-offset-2">{@html post.title}</header>
	<div class="markdown">{@html post.html}</div>
</article>
