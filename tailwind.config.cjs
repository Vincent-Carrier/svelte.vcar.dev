/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{svelte,md}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['AlegreyaVariable', 'Alegreya', 'serif'],
				sans: ['MontserratVariable', 'system-ui', 'sans-serif'],
				display: ['Oleo Script', 'sans-serif'],
				mono: ['Berkeley Mono', 'monospace'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}