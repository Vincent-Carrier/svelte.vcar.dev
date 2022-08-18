<svg class="h-full w-full fixed inset-0 -z-10">
	<defs>
		<pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
			<g id="pattern" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<g fill="var(--fill-color, black)">
					<circle cx="3" cy="3" r="1.2" />
					<circle cx="13" cy="13" r="1.2" />
				</g>
			</g>
		</pattern>
	</defs>
	<rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
</svg>

<style>
	svg {
		--fill-color: theme(colors.stone.200);
	}

	/* circle:nth-of-type(1) {
		animation: twinkle 1.5s linear infinite alternate;
	}
	circle:nth-of-type(2) {
		animation: twinkle 1.5s linear 1.5s infinite alternate;
	}


	@keyframes twinkle {
		100% {
			r: 3;
		}
	} */
</style>
