<script lang="ts">
	import 'prism-theme-vars/base.css'
	import './post.css'

	export let data: { post: Post }
	$: ({ post } = data)
</script>

<article class="card px-8 py-6 sm:w-screen sm:px-4">
	<div class="markdown">{@html post.html}</div>
</article>
