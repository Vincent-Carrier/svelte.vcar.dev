<svg class="h-full w-full" style:background-color="var(--bg-color)">
	<defs>
		<pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
			<slot />
		</pattern>
	</defs>
	<rect x="-20%" y="-20%" width="140%" height="140%" fill="url(#pattern)" />
</svg>

<style>
	:root {
		--bg-color: theme(colors.stone.100);
		--fill-color: theme(colors.stone.300);
	}
</style>
