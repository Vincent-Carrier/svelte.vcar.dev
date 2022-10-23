<script lang="ts">
	import '@fontsource/alegreya/variable-italic.css'
	import '@fontsource/alegreya/variable.css'
	import '@fontsource/montserrat/variable.css'
	import '@fontsource/oleo-script'
	import '@shoelace-style/shoelace/dist/themes/light.css'
	import '../app.css'

	import Nav from '$lib/Nav.svelte'

	import { fade } from 'svelte/transition'
	import type { LayoutData } from './$types'

	export let data: LayoutData
</script>

<div class="bg-stone-100 fixed inset-0 heropattern-autumn-stone-200" />
<div class="py-10">
		<div class="mx-auto max-w-md max-sm:max-w-sm">
			<nav class="relative z-10 ml-auto w-min translate-y-2 transform">
				<Nav />
			</nav>
		</div>
		{#key data.url}
			<main class="max-sm:mx-2" in:fade={{ duration: 200, delay: 150 }} out:fade={{ duration: 150 }}>
				<slot />
			</main>
		{/key}
</div>
