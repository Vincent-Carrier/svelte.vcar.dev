<svg class="h-full w-full fixed inset-0 -z-10">
	<defs>
		<pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
			<g id="pattern" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<g fill="var(--fill-color, black)">
					<circle cx="3" cy="3" r="2" />
					<circle cx="13" cy="13" r="2" />
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

	svg {
		animation: slide 5s linear infinite;
	}

	@keyframes slide {
		from {
			transform: translate(-20px, -20px)
		}

		to {
			transform: translate(0, 0)
		}
	}
</style>
