<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div class="grid gap-8 mt-8">
	{#each data.foods as food}
		<div class="flex items-center even:flex-row-reverse group">
			<a href={`https://www.goodreads.com/book/show/${food.id}`} target="_blank">
				<article class="card p-10">
					<header>
						<div class="h1 underline underline-offset-2">{food.title}</div>
						<div class="text-xl font-medium leading-1 text-yellow-700">{@html food.subtitle}</div>
					</header>
					<p class="mt-4 font-serif text-xl text-stone-700">{food.summary}</p>
				</article>
			</a>
			<img src={food.image} alt="" class="bg-gray-200 w-52 group-odd:-ml-4 group-even:-mr-4 z-10 border shadow-md"/>
		</div>
	{/each}
</div>

