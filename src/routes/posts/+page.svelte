<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
	$: ({posts} = data)
</script>

<div class="grid gap-4">
	{#each posts as post}
		<a href={`/posts/${post.slug}`}>
			<article class="card px-8 py-6 w-[42rem]">
				<header class="h1 underline underline-offset-2">{post.title}</header>
				<p class="font-serif text-2xl text-stone-700 mt-4">{post.summary}</p>
				<div class="text-right text-stone-500 mt-4">{post.published}</div>
			</article>
		</a>
	{/each}
</div>
