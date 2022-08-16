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

<div class="-z-10 fixed inset-0">
	<Pattern>
		<PolkaDots />
	</Pattern>
</div>
<main class="flex flex-col items-center max-w-prose mx-auto my-10">
	<slot name="nav">
		<nav class="w-[36rem] mt-16 -mb-4 mr-8 z-10">
			<Nav />
		</nav>
	</slot>
	<slot />
</main>
