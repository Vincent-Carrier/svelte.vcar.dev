<script lang="ts">
	import '@fontsource/alegreya/variable-italic.css'
	import '@fontsource/alegreya/variable.css'
	import "@fontsource/montserrat/variable.css"
	import '@fontsource/oleo-script'
	import '@shoelace-style/shoelace/dist/themes/light.css'
	import '../app.css'

	import Nav from '$lib/Nav.svelte'
	import Pattern from '$lib/pattern.svelte'

	import { fly } from 'svelte/transition'
	import type { LayoutData } from './$types'
	
	export let data: LayoutData
</script>

<Pattern/>
<div class="mx-auto my-10 flex sm:mx-2 flex-col items-center">
	<slot name="nav">
		<nav class="z-10 -mb-3 mr-8 w-full max-w-lg">
			<Nav />
		</nav>
	</slot>
	{#key data.url}
		<main class='w-full' in:fly={{ x: 200, duration: 400, delay: 200 }} out:fly={{ x: -200, duration: 200 }}>
			<slot />
		</main>
	{/key}
</div>
