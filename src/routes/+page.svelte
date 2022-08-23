<script lang="ts">
	import Bizcard from '$lib/BizCard.svelte'
</script>

<article class="card max-w-xl flex flex-col gap-4 p-12 sm:p-8">
	<p class="mb-28 sm:mb-24 font-serif text-2xl leading-relaxed text-stone-700">
		<strong class="mb-4 inline-block text-4xl">Hi there! 👋</strong>
		<br />
		I'm a Montréal-based web developer
		<em class="mb-4 sm:my-6 inline-block w-full origin-right -rotate-2 transform text-right text-3xl">
			a digital vagabond
		</em>
		<span class="text-xl">a detail-obsessed</span>
		<span class="text-3xl font-medium italic">pixel-pusher</span>
		<br />
		<span class="block text-center">
			and just generally
			<span class="inline-block translate-y-4 translate-x-2 transform text-3xl font-black text-stone-600">
				kind of a lot.
			</span>
		</span>
	</p>
	<div class="absolute -bottom-16 -right-16 sm:inset-x-0">
		<Bizcard />
	</div>
</article>
