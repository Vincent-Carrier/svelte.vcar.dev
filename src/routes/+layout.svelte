<script>
	import '@fontsource/inter/variable.css'
	// import "@fontsource/alegreya-sans-sc"
	import '@fontsource/alegreya/variable-italic.css'
	import '@fontsource/alegreya/variable.css'
	import '@fontsource/oleo-script'
	import '../app.css'

	import Nav from '$lib/nav.svelte'
	import Pattern from '../svg/pattern.svelte'
	import PolkaDots from '../svg/polka-dots.svelte'
</script>

<div class="fixed inset-0 -z-10">
	<Pattern>
		<PolkaDots />
	</Pattern>
</div>
<main class="mx-auto my-10 flex max-w-prose flex-col items-center">
	<slot name="nav">
		<nav class="z-10 mt-16 -mb-4 mr-8 w-[36rem]">
			<Nav />
		</nav>
	</slot>
	<slot />
</main>
