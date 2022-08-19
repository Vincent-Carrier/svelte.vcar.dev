import type { PageServerLoad } from './$types'

const foods = [
	{
		title: 'Different',
		subtitle: 'Gender Through the Eyes of a Primatologist',
		author: 'Frans de Waal',
		id: '58085267-different',
		image:
			'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641271171i/58085267.jpg',
		summary: `Though many scholars now argue that gender differences are purely a product of socialization, primatologist Frans de Waal illustrates in Different the scientific, evolutionary basis for gender differences in humans, drawing on his decades of experience working with our closest ape relatives: chimpanzees and bonobos. De Waal illuminates their behavioral and biological differences, and compares and contrasts them with human behavior: male domination and territoriality in chimpanzees and the female-led pacific society of bonobos.`,
	},
	{
		title: 'After Steve',
		subtitle: 'How Apple Became a Trillion-Dollar Company and&nbsp;Lost&nbsp;Its&nbsp;Soul',
		author: 'Tripp Mickle',
		image:
			'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1650312902i/58733657.jpg',
		summary: `Steve Jobs called Jony Ive his "spiritual partner at Apple." The London-born genius was the second-most powerful person at Apple and the creative force who most embodies Jobs's spirit, the man who designed the products adopted by hundreds of millions the world over: the iPod, iPad, MacBook Air, the iMac G3, and the iPhone. In the wake of his close collaborator's death, the chief designer wrestled with grief and initially threw himself into his work designing the new Apple headquarters and the Watch before losing his motivation in a company increasingly devoted more to margins than to inspiration.`,
		id: '58733657-after-steve',
	},
	{
		title: 'Dominion',
		subtitle: 'How the Christian Revolution Remade the World',
		author: 'Tom Holland',
		image:
			'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550694436i/43885149.jpg',
		summary: `Crucifixion, the Romans believed, was the worst fate imaginable, a punishment reserved for slaves. How astonishing it was, then, that people should have come to believe that one particular victim of crucifixion-an obscure provincial by the name of Jesus-was to be worshipped as a god. Dominion explores the implications of this shocking conviction as they have reverberated throughout history.`,
		id: '43885149-dominion',
	},
	{
		title: 'Wanting',
		subtitle: 'The Power of Mimetic Desire in Everyday Life',
		author: 'Luke Burgis',
		image:
			'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1615240502i/54860444.jpg',
		summary: `Gravity affects every aspect of our physical being, but there's a psychological force just as powerful – yet almost nobody has heard of it. It's responsible for bringing groups of people together and pulling them apart, making certain goals attractive to some and not to others, and fueling cycles of anxiety and conflict. In Wanting, Luke Burgis draws on the work of French polymath René Girard to bring this hidden force to light and reveals how it shapes our lives and societies.`,
		id: '54860444-wanting',
	},
	{
		title: 'Against the Grain',
		subtitle: 'A Deep History of the Earliest States',
		author: 'James C. Scott',
		image:
			'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1497092928i/34324534.jpg',
		summary: `Why did humans abandon hunting and gathering for sedentary communities dependent on livestock and cereal grains, and governed by precursors of today’s states? Most people believe that plant and animal domestication allowed humans, finally, to settle down and form agricultural villages, towns, and states, which made possible civilization, law, public order, and a presumably secure way of living. But archaeological and historical evidence challenges this narrative. The first agrarian states, says James C. Scott, were born of accumulations of domestications: first fire, then plants, livestock, subjects of the state, captives, and finally women in the patriarchal family—all of which can be viewed as a way of gaining control over reproduction.`,
		id: '34324534-against-the-grain',
	},
	{
		title: 'The Stuff of Thought',
		subtitle: 'Language as a Window into Human Nature',
		author: 'Steven Pinker',
		image:
			'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327928557i/373969.jpg',
		summary: `In The Stuff of Thought, Pinker marries two of the subjects he knows best: language and human nature. The result is a fascinating look at how our words explain our nature. What does swearing reveal about our emotions? Why does innuendo disclose something about relationships? Pinker reveals how our use of prepositions and tenses taps into peculiarly human concepts of space and time, and how our nouns and verbs speak to our notions of matter. Even the names we give our babies have important things to say about our relations to our children and to society.`,
		id: '373969.The_Stuff_of_Thought',
	},
	{
		title: 'Lost Connections',
		subtitle: 'Uncovering the Real Causes of Depression - and the Unexpected Solutions',
		author: 'Johann Hari',
		image:
			'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631416785i/34921573.jpg',
		summary: `Award-winning journalist Johann Hari suffered from depression since he was a child and started taking antidepressants when he was a teenager. He was told—like his entire generation—that his problem was caused by a chemical imbalance in his brain. As an adult, trained in the social sciences, he began to investigate this question—and he learned that almost everything we have been told about depression and anxiety is wrong.`,
		id: '34921573-lost-connections',
	},
]

export const load: PageServerLoad = async function () {
	return { foods }
}
