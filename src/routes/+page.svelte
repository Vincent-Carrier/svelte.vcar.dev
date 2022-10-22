<script lang="ts">
	import Bizcard from '$lib/BizCard.svelte'
</script>

<article class="card mx-auto flex max-w-xl flex-col gap-4 p-12 max-sm:p-8">
	<p class="mb-28 font-serif text-2xl leading-relaxed text-stone-700 max-sm:mb-24">
		<strong class="mb-4 inline-block text-4xl">
			Hi there! <span class="wave inline-block">👋</span>
		</strong>
		<br />
		I'm Vincent. I like to make pretty websites, learn dead languages and argue about silly things.
	</p>
	<div class="absolute -bottom-16 -right-8 max-sm:right-0">
		<Bizcard />
	</div>
</article>

<style>
	@keyframes wave {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(16deg);
		}
		20% {
			transform: rotate(-6deg);
		}
		30% {
			transform: rotate(16deg);
		}
		40% {
			transform: rotate(-4deg);
		}
		50% {
			transform: rotate(16deg);
		}
		60% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
	.wave {
		animation: wave 1.5s 0.5s;
		transform-origin: 75% 75%;
	}
</style>
