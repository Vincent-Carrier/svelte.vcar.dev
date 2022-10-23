<svg class="fixed inset-0 -z-10 h-full w-full">
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

	circle:nth-child(1) {
		animation: slide 5s alternate infinite ease-out;
	}
	circle:nth-child(2) {
		animation: slide 5s alternate-reverse infinite ease-out;
	}

	@keyframes slide {
		from {
			cx: 3;
			cy: 3;
		}

		to {
			cx: 13;
			cy: 13;
		}
	}
</style>
