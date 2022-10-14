<script lang="ts">
	// @ts-nocheck
	import Github from '~icons/mdi/github-face'
	import Rss from '~icons/mdi/rss'
	import Twitter from '~icons/mdi/twitter'
	import profile from './profile.png?w=448&webp'

	const socials = [
		{ Icon: Github, class: 'text-yellow-200', href: 'https://github.com/Vincent-Carrier' },
		{ Icon: Twitter, class: 'text-yellow-200', href: 'https://twitter.com/VincntCarrier' },
		{ Icon: Rss, class: 'text-yellow-200', href: '/posts/index.xml' },
	]
</script>

<div class="BizCard topography transform sm:scale-90 relative flex h-36 w-min gap-4 px-8 py-4">
	<img
		src={profile}
		alt="profile"
		class="absolute bottom-0 left-4 w-56 drop-shadow-2xl filter"
	/>
	<div class="w-36" />
	<div class="my-auto whitespace-nowrap text-right">
		<div class="font-display text-4xl text-yellow-50">Vincent Carrier</div>
		<div class="-mt-1 text-2xl font-medium text-yellow-100">Web Developer</div>
		<div class="mt-1 flex w-full justify-end gap-1">
			{#each socials as social}
				<a href={social.href} target="_blank">
					<svelte:component this={social.Icon} class={`h-8 w-8 drop-shadow-sm filter ${social.class}`} />
				</a>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.BizCard {
		@apply rounded-md border-4 border-b-0 border-yellow-400 bg-yellow-500 shadow-md;
	}
</style>
