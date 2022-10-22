<script lang="ts">
	import ExternalLink from '~icons/heroicons-outline/external-link'
	import endossed from './img/endossed.png?w=720&webp'
	import greeklearnsyou from './img/greeklearnsyou.png?w=720&webp'
	import molsoft from './img/molsoft.png?w=720&webp'
	import thirdwheel from './img/thirdwheel.png?w=720&webp'

	let projects = [
			{
				name: 'molsoft.io',
				description: 'Marketing website for the Molsoft eCommerce agency',
				technologies: 'React, NextJS, TypeScript, Tailwind',
				img: molsoft,
				url: 'https://www.molsoft.io/',
			},
			{
				name: 'Endossed',
				description: 'Web app for Endossed, a FinTech startup',
				technologies: 'React, TypeScript, Tailwind',
				img: endossed,
				url: 'https://my.endossed.com/',
			},
			{
				name: 'ThirdWheel',
				description: 'A dating app with a twist: others match you',
				technologies: 'React, SASS, PostgreSQL, Node.js',
				img: thirdwheel,
				url: 'https://github.com/Vincent-Carrier/thirdwheel',
			},
			{
				name: 'Greek Learns You',
				description: "Learn Greek words you didn't know you already knew",
				technologies: 'Svelte, Tailwind',
				img: greeklearnsyou,
				url: 'https://github.com/Vincent-Carrier/greeklearnsyou',
			},
		]
</script>

<div class="mx-auto max-w-5xl px-4 grid gap-6 grid-cols-1 lg:grid-cols-2 mt-8">
	{#each projects as p}
		<a href={p.url} target="_blank" rel="noreferrer">
			<article class="card rounded-xl max-w-lg mx-auto w-full hover:shadow-xl transform hover:scale-105 transition-all">
				<div class="relative">
					<img src={p.img} alt='' class="h-64 w-full object-cover rounded-t-xl relative" />
					<div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
				</div>
				<div class="px-4 py-4">
					<header class="mb-2 items-center font-sans text-xl font-semibold text-stone-700 flex-x-2">
						{p.name}
						<ExternalLink class='text-cyan-600 ml-auto hidden' />
					</header>
					<p class="mb-1 leading-snug text-stone-600">{p.description}</p>
					<p class="text-sm text-stone-500">{p.technologies}</p>
				</div>
			</article>
		</a>
	{/each}
</div>
