<script lang="ts">
	import 'prism-theme-vars/base.css'
	import type { PageData } from './$types'
	import './post.css'

	export let data: PageData
</script>

<article class="card mx-auto max-w-3xl px-8 py-6 sm:w-screen sm:px-4">
	<div class="markdown">{@html data.post.html}</div>
</article>
