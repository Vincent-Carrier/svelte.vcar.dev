const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{svelte,md}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['AlegreyaVariable', 'Alegreya', 'serif'],
				sans: ['MontserratVariable', 'system-ui', 'sans-serif'],
				display: ['Oleo Script', 'sans-serif'],
				// mono: ['Berkeley Mono', 'monospace'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'flex-y'(val) {
						return { display: 'flex', flexDirection: 'column', rowGap: val }
					},
					'flex-x'(val) {
						return { display: 'flex', flexDirection: 'row', columnGap: val }
					},
				},
				{ values: theme('spacing') }
			)
		}),
	],
}
