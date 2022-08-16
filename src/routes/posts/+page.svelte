<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
	$: ({ posts } = data)
</script>

<div class="grid gap-4">
	{#each posts as post}
		<a href={`/posts/${post.slug}`}>
			<article class="card w-[42rem] px-8 py-6">
				<header class="h1 underline underline-offset-2">{post.title}</header>
				<p class="mt-4 font-serif text-2xl text-stone-700">{post.summary}</p>
				<div class="mt-4 text-right text-stone-500">{post.published}</div>
			</article>
		</a>
	{/each}
</div>
