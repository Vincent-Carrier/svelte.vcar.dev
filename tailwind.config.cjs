/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.svelte'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['AlegreyaVariable', 'Alegreya', 'serif'],
				sans: ['InterVariable', 'system-ui', 'sans-serif'],
				display: ['Oleo Script', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
