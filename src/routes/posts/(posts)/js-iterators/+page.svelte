<script context="module">
	import { browser } from "$app/environment"


  if (browser) {
		Promise.all([
			import('sl-tab'),
			import('sl-tab-group'),
			import('sl-tab-panel')
		])
	}


	export const frontmatter = {
		title: 'JavaScript Iterators Made&nbsp;Easy',
		date: 'January 16, 2021',
		summary: `Let's explore one of JavaScript's most undervalued feature and find out how to make the best of it.`,
	}

</script>