<script lang="ts">
	import Nav from '@/components/nav.svelte'
	import type { Post } from '@/routes/posts'

	export let posts: Post[]
</script>

<nav class="w-[36rem] mt-16 -mb-4 mr-8 z-10">
	<Nav/>
</nav>
<div class="grid gap-4">
	{#each posts as post}
		<a href={`/posts/${post.slug}`}>
			<article class="card px-8 py-6 w-[42rem]">
				<header class="h1">{post.data.title}</header>
				<p class="font-serif text-2xl text-stone-700 mt-4">{post.data.summary}</p>
				<div class="text-right text-stone-500 mt-4">{post.data.published}</div>
			</article>
		</a>
	{/each}
</div>
