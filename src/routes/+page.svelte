<script lang="ts">
	import Bizcard from '$lib/BizCard.svelte'
</script>

<article class="card flex flex-col gap-4 p-12">
	<p class="mb-24 font-serif text-2xl leading-relaxed text-stone-700">
		<strong class="mb-4 inline-block text-4xl">Hi there! 👋</strong><br />
		I'm a Montréal-based web developer,<br />
		<em class="mb-2 inline-block w-full origin-right -rotate-3 scale-105 transform text-right"
			>a digital vagabond,</em
		>
		<span class="text-xl">a detail-obsessed</span>
		<span class="text-3xl font-medium italic">pixel-pusher</span>,<br />
		<span class="block text-center"
			>and just generally
			<span class="inline-block translate-y-4 translate-x-2 transform font-black text-3xl"
				>kind of a lot.</span
			></span
		>
	</p>
	<div class="absolute -bottom-16 -right-16">
		<Bizcard />
	</div>
</article>
