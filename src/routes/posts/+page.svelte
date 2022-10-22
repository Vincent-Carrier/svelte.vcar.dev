<script lang="ts">
	export let data: { posts: Frontmatter[] }
</script>

<div class="flex-y-4 mx-auto max-w-2xl px-4">
	{#each data.posts as post}
		<a href={`/posts/${post.slug}`}>
			<article class="card px-8 py-6">
				<header class="h1 underline underline-offset-2">{@html post.title}</header>
				<p class="mt-4 font-serif text-2xl text-stone-700">{post.summary}</p>
				<div class="mt-2 text-right text-lg font-medium text-stone-500">
					{post.date}
				</div>
			</article>
		</a>
	{/each}
</div>
