<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<div class="flex-y-8 sm:gap-y-2 md:mt-8">
	{#each data.foods as food}
		<div class="flex items-center even:flex-row-reverse group">
			<article class="card p-10 sm:p-6">
				<header>
					<a href={`https://www.goodreads.com/book/show/${food.id}`} target="_blank">
						<div class="h1 underline underline-offset-2">{food.title}</div>
						<div class="text-xl font-medium leading-1 text-yellow-700">{@html food.subtitle}</div>
					</a>
				</header>
				<p class="mt-4 font-serif text-xl text-stone-700">{food.summary}</p>
			</article>
			<a href={`https://www.goodreads.com/book/show/${food.id}`} target="_blank">
				<img
					src={food.image}
					alt=""
					loading="lazy"
					class="sm:hidden bg-gray-200 w-52 group-odd:-ml-4 group-even:-mr-4 z-10 border shadow-md"
				/>
			</a>
		</div>
	{/each}
</div>
