import { writable } from 'svelte/store';
import { Test } from './model/test';
import { MCQuestion } from './model/mcQuestion';
import { LAQuestion } from './model/laQuestion';
export const TestStore = writable([
	new Test(
		'Geography', 0,
		[new MCQuestion('What is 1+1?', ['A: 1', 'B: 2', 'C: 3', 'D: 4'], 'B: 2')],
		[new LAQuestion('What is the capital of France?', 'Paris')]
	),
	new Test(
		'Biology Test', 1,
		[
			new MCQuestion('What is the largest planet in our solar system?', ['A: Mars', 'B: Earth', 'C: Jupiter', 'D: Saturn'], 'C: Jupiter'),
			new MCQuestion('Which element has the chemical symbol O?', ['A: Gold', 'B: Oxygen', 'C: Silver', 'D: Helium'], 'B: Oxygen')
		],
		[new LAQuestion('Explain the process of photosynthesis.', 'Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods from carbon dioxide and water. Photosynthesis in plants generally involves the green pigment chlorophyll and generates oxygen as a byproduct.')]
	),
	new Test(
		'Physics', 2,
		[
			new MCQuestion('Who wrote "To be, or not to be, that is the question"?', ['A: Leonardo da Vinci', 'B: William Shakespeare', 'C: Galileo Galilei', 'D: Winston Churchill'], 'B: William Shakespeare'),
			new MCQuestion('What is the capital of Italy?', ['A: Rome', 'B: Paris', 'C: Berlin', 'D: Madrid'], 'A: Rome')
		],
		[new LAQuestion('Describe the theory of relativity.', 'The theory of relativity, developed by Albert Einstein, encompasses two theories: special relativity and general relativity. Special relativity applies to all physical phenomena in the absence of gravity. General relativity explains the law of gravitation and its relation to other forces of nature. It applies to the cosmological and astrophysical realm, including astronomy.')]
	),
	new Test(
		'Chemistry', 3,
		[
			new MCQuestion('What is the smallest prime number?', ['A: 1', 'B: 2', 'C: 3', 'D: 5'], 'B: 2'),
			new MCQuestion('Which gas is most abundant in the Earth\'s atmosphere?', ['A: Oxygen', 'B: Hydrogen', 'C: Nitrogen', 'D: Carbon Dioxide'], 'C: Nitrogen')
		],
		[new LAQuestion('What is the significance of the Magna Carta?', 'The Magna Carta, signed in 1215, was the first document to put into writing the principle that the king and his government were not above the law. It laid the foundations for individual rights in international law.')]
	),
	new Test(
		'History', 4,
		[
			new MCQuestion('Who painted the Mona Lisa?', ['A: Vincent van Gogh', 'B: Leonardo da Vinci', 'C: Pablo Picasso', 'D: Michelangelo'], 'B: Leonardo da Vinci'),
			new MCQuestion('Which planet is known as the Red Planet?', ['A: Venus', 'B: Mars', 'C: Jupiter', 'D: Saturn'], 'B: Mars')
		],
		[new LAQuestion('Explain Newton\'s laws of motion.', 'Newton\'s laws of motion are three physical laws that together laid the foundation for classical mechanics. The first law states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force. The second law states that the rate of change of momentum of an object is directly proportional to the force applied, and the direction of the force is in the direction of the change of momentum. The third law states that for every action, there is an equal and opposite reaction.')]
	),
	new Test(
		'Literature', 5,
		[
			new MCQuestion('Who wrote "Romeo and Juliet"?', ['A: William Wordsworth', 'B: William Shakespeare', 'C: John Milton', 'D: Geoffrey Chaucer'], 'B: William Shakespeare'),
			new MCQuestion('What is the largest organ in the human body?', ['A: Liver', 'B: Brain', 'C: Skin', 'D: Heart'], 'C: Skin')
		],
		[new LAQuestion('Explain the concept of supply and demand.', 'Supply and demand is an economic model of price determination in a market. It postulates that in a competitive market, the price of a particular good or service will adjust until it settles at a point where the quantity demanded by consumers equals the quantity supplied by producers.')]
	),
	new Test(
		'Chemistry Review', 6,
		[
			new MCQuestion('What is the chemical symbol for water?', ['A: H2O', 'B: CO2', 'C: O2', 'D: NaCl'], 'A: H2O'),
			new MCQuestion('Who discovered penicillin?', ['A: Alexander Fleming', 'B: Louis Pasteur', 'C: Marie Curie', 'D: Albert Einstein'], 'A: Alexander Fleming')
		],
		[new LAQuestion('Explain the concept of globalization.', 'Globalization is the process of increased interconnectedness and interdependence among countries, economies, and cultures. It involves the exchange of goods, services, technology, information, and ideas across national borders, leading to greater integration and interrelation of the world\'s economies and societies.')]
	)
]);