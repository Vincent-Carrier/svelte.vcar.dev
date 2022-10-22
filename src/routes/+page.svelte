<script lang="ts">
	import Bizcard from '$lib/BizCard.svelte'
</script>

<article class="card mx-auto max-w-xl flex flex-col gap-4 p-12 max-sm:p-8">
	<p class="mb-28 max-sm:mb-24 font-serif text-2xl leading-relaxed text-stone-700">
		<strong class="mb-4 inline-block text-4xl">Hi there! 👋</strong>
		<br>
		I'm Vincent. I like to make pretty websites, learn dead languages and argue about silly things.
	</p>
	<div class="absolute -bottom-16 -right-8 max-sm:right-0">
		<Bizcard />
	</div>
</article>
