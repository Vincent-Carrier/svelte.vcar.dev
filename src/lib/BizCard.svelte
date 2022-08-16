<script lang="ts">
	import Github from '~icons/mdi/github'
	import Twitter from '~icons/mdi/twitter'

	const socials = [{ Icon: Github, href: 'https://'}, {Icon: Twitter, href: 'https://'}]
</script>

<div class="bizcard topography relative flex h-36 w-min gap-4 px-8 py-4">
	<img
		src="/profile.png"
		alt="profile"
		class="absolute bottom-0 left-4 w-56 drop-shadow-2xl filter"
	/>
	<div class="w-36" />
	<div class="my-auto whitespace-nowrap text-right">
		<div class="font-display text-stone-50 text-4xl">Vincent Carrier</div>
		<div class="text-xl font-medium tracking-tight text-yellow-100 -mt-1">Web Developer</div>
		<div class="flex w-full justify-end gap-2 mt-2">
			{#each socials as social}
				<a href={social.href}>
					<svelte:component this={social.Icon} class="text-yellow-100 w-8 h-8" />
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
