<script>
	import "@fontsource/inter/variable.css"
	// import "@fontsource/alegreya-sans-sc"
	import '@/app.css'
	import "@fontsource/alegreya/variable-italic.css"
	import "@fontsource/alegreya/variable.css"
	import "@fontsource/oleo-script"

	import Pattern from '@/svg/pattern.svelte'
	import PolkaDots from '@/svg/polka-dots.svelte'
</script>

<div class="-z-10 fixed inset-0">
	<Pattern>
		<PolkaDots />
	</Pattern>
</div>
<header>
	<nav />
</header>
<main class='flex flex-col items-center container mx-auto my-10'>
	<slot />
</main>
