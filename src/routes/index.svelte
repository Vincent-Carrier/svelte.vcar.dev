<script>
	import Nav from '@/components/nav.svelte'
</script>

<nav class="w-[36rem] mt-16 -mb-8 mr-8 z-10">
	<Nav />
</nav>
<article
	class="w-[36rem] card flex flex-col gap-4 p-12"
>
	<p class="text-stone-700 font-serif text-2xl leading-relaxed">
		<strong class="inline-block mb-4 text-4xl">Hi there! 👋</strong><br />
		I'm a Montréal-based web developer,<br />
		<em class="inline-block w-full text-right transform rotate scale-105 -rotate-3 origin-right mb-2"
			>a digital vagabond,</em
		>
		<span class="text-xl">a detail-obsessed</span>
		<strong><span class="text-3xl italic">pixel-pusher</span></strong>,<br />
		<span class="block text-center"
			>and just generally, <span class="transform font-extrabold translate-y-4 inline-block"
				>kind of a lot.</span
			></span
		>
	</p>
	<div class="h-24" />
</article>
<div class="w-[42rem]">
	<div
		class="ml-auto w-min h-36 relative rounded-md flex gap-4 -mt-20 bg-yellow-500 px-8 py-4 shadow-md border-4 border-b-0 border-yellow-400 topography"
	>
		<img
			src="/profile.png"
			alt="profile"
			class="w-56 absolute bottom-0 left-4 filter drop-shadow-2xl"
		/>
		<div class="w-36" />
		<div class="whitespace-nowrap text-stone-50 text-right my-auto">
			<div class="text-4xl font-display">Vincent Carrier</div>
			<div class="text-xl font-medium tracking-tight text-yellow-50">Web Developer</div>
		</div>
	</div>
</div>
