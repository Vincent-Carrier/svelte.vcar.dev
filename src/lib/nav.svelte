<script lang="ts">
	import { page } from '$app/stores'
	import cx from 'classnames'
	const paths = [
		{ href: '/', label: 'about' },
		{ href: '/posts', label: 'blog' },
	]
</script>

<ul
	class="ml-auto card shadow-sm w-min gap-4 px-4 py-2 text-2xl font-display flex"
>
{#each paths as path}
	{@const klass = $page.url.pathname === path.href ? 'text-yellow-600 underline underline-offset-4' : 'text-gray-400'}
	<li><a href={path.href} class={cx(klass, "hover:text-yellow-600")}>{path.label}</a></li>
{/each}
</ul>
