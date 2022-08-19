<script lang="ts">
	import { page } from '$app/stores'
	const paths = [
		{ href: '/', label: 'about' },
		{ href: '/posts', label: 'blog' },
		{
			href: '/brainfood',
			label: 'brainfood',
			tooltip: "What I've been reading",
		},
	]
</script>

<ul class="card ml-auto flex w-min py-2 font-display text-2xl divide-x">
	{#each paths as path}
		{@const active = $page.url.pathname === path.href}
		{@const inactive = !active}
		<li class="px-4">
			<a sveltekit:noscroll href={path.href} class:active class:inactive>
				{#if path.tooltip}
					<abbr title={path.tooltip}>{path.label}</abbr>
				{:else}
					{path.label}
				{/if}
			</a>
		</li>
	{/each}
</ul>

<style lang="postcss">
	.active {
		@apply text-yellow-500 underline underline-offset-4;
	}
	.inactive {
		@apply text-gray-400;
	}
	.inactive:hover {
		@apply text-yellow-500;
	}
</style>
