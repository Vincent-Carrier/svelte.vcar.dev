<script lang="ts">
	import Github from '~icons/mdi/github'
	import Twitter from '~icons/mdi/twitter'

	const socials = [
		{ Icon: Github, href: 'https://' },
		{ Icon: Twitter, href: 'https://' },
	]
</script>

<div class="bizcard topography relative flex h-36 w-min gap-4 px-8 py-4">
	<img
		src="/profile.png"
		alt="profile"
		class="absolute bottom-0 left-4 w-56 drop-shadow-2xl filter"
	/>
	<div class="w-36" />
	<div class="my-auto whitespace-nowrap text-right">
		<div class="font-display text-4xl text-yellow-50">Vincent Carrier</div>
		<div class="-mt-1 text-xl font-medium tracking-tight text-yellow-100">Web Developer</div>
		<div class="mt-2 flex w-full justify-end gap-2">
			{#each socials as social}
				<a href={social.href}>
					<svelte:component this={social.Icon} class="h-8 w-8 text-yellow-100 drop-shadow-sm filter" />
				</a>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.bizcard {
		@apply rounded-md border-4 border-b-0 border-yellow-400 bg-yellow-500 shadow-md;
	}
</style>
