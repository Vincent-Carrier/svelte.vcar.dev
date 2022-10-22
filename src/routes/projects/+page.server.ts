import type { PageServerLoad } from './$types'
import endossed from './img/endossed.png?w=720&webp'
import greeklearnsyou from './img/greeklearnsyou.png?w=720&webp'
import molsoft from './img/molsoft.png?w=720&webp'
import thirdwheel from './img/thirdwheel.png?w=720&webp'

export const load: PageServerLoad = async () => {
	return {
		projects: [
			{
				name: 'molsoft.io',
				description: 'Marketing website for the Molsoft eCommerce agency',
				technologies: 'React, NextJS, TypeScript, Tailwind',
				img: molsoft,
				url: 'https://www.molsoft.io/',
			},
			{
				name: 'Endossed',
				description: 'Web app for Endossed, a FinTech startup',
				technologies: 'React, TypeScript, Tailwind',
				img: endossed,
				url: 'https://my.endossed.com/',
			},
			{
				name: 'ThirdWheel',
				description: 'A dating app with a twist: others match you',
				technologies: 'React, SASS, PostgreSQL, Node.js',
				img: thirdwheel,
				url: 'https://github.com/Vincent-Carrier/thirdwheel',
			},
			{
				name: 'Greek Learns You',
				description: "Learn Greek words you didn't know you already knew",
				technologies: 'Svelte, Tailwind',
				img: greeklearnsyou,
				url: 'https://github.com/Vincent-Carrier/greeklearnsyou',
			},
			// {
			// 	name: 'Addelink',
			// 	description:
			// 		'Progressive Web App made to help construction workers comply with safety regulations and standards',
			// 	technologies: 'React, TypeScript, Tailwind',
			// 	img: '',
			// 	url: '',
			// },
		],
	}
}
