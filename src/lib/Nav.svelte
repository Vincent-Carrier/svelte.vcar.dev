<script lang="ts">
	import { page } from '$app/stores'
	import { onMount } from 'svelte'

	onMount(() => import('sl-tooltip'))

	const paths = [
		{ href: '/', label: 'about' },
		{ href: '/posts', label: 'blog' },
		{ href: '/projects', label: 'projects', },
	]
</script>

<ul class="card ml-auto flex w-min divide-x py-2 font-display text-2xl">
	{#each paths as path}
		{@const active = $page.url.pathname === path.href}
		{@const inactive = !active}
		<li class="px-4">
			<a sveltekit:noscroll href={path.href} class:active class:inactive>
				{path.label}
			</a>
		</li>
	{/each}
</ul>

<style lang="postcss">
	.active {
		@apply text-yellow-500 underline underline-offset-4;
	}
	.inactive {
		@apply text-gray-400 transition-all;
	}
	.inactive:hover {
		@apply text-yellow-500;
	}
</style>
