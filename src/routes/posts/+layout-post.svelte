<script lang="ts">
	import type { PageData } from './$types'
	import './post.css'

	export let data: PageData
</script>

<article class="card px-8 py-6">
	<header class="h1 mt-4 underline underline-offset-2">{data.title}</header>
	<div class="markdown">{@html data.html}</div>
</article>
