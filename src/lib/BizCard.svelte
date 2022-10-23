<script lang="ts">
	import Github from '~icons/mdi/github-face'
	import Rss from '~icons/mdi/rss'
	import Twitter from '~icons/mdi/twitter'
	import profile from './profile.png?w=448&webp'

	const socials = [
		{ Icon: Github, href: 'https://github.com/Vincent-Carrier' },
		{ Icon: Twitter, href: 'https://twitter.com/VincntCarrier' },
		{ Icon: Rss, href: '/posts/rss.xml' },
	]
</script>

<div class="BizCard heropattern-diagonallines-yellow-400 transform max-sm:scale-90 relative flex h-36 gap-4 px-8 py-4">
	<img
		src={profile}
		alt="profile"
		class="absolute bottom-0 left-4 w-56 filter brightness-105"
	/>
	<div class="w-36" />
	<div class="my-auto whitespace-nowrap text-right">
		<div class="font-display text-4xl text-yellow-50">Vincent Carrier</div>
		<div class="-mt-1 text-2xl font-medium text-yellow-100">Web Developer</div>
		<div class="mt-1 flex w-full justify-end gap-1">
			{#each socials as social}
				<a href={social.href} target="_blank">
					<svelte:component this={social.Icon} class="h-8 w-8 drop-shadow-sm filter transition-all text-yellow-200 hover:text-yellow-50" />
				</a>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.BizCard {
		@apply rounded-md border-4 border-b-0 border-yellow-400 bg-yellow-500 shadow-md;
		background-size: 8px;
	}
</style>
