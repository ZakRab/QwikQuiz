import { writable } from 'svelte/store';
import { Test } from './model/test';
import { MCQuestion } from './model/mcQuestion';
import { LAQuestion } from './model/laQuestion';
export const TestStore = writable([
	new Test(
		'Test 1', 0,
		[new MCQuestion('What is 1+1?', ['A: 1', 'B: 2', 'C: 3', 'D: 4'], 'B: 2')],
		[new LAQuestion('What is the capital of France?', 'Paris')]
	),
	new Test(
		'Test 2', 1,
		[
			new MCQuestion('What is the largest planet in our solar system?', ['A: Mars', 'B: Earth', 'C: Jupiter', 'D: Saturn'], 'C: Jupiter'),
			new MCQuestion('Which element has the chemical symbol O?', ['A: Gold', 'B: Oxygen', 'C: Silver', 'D: Helium'], 'B: Oxygen')
		],
		[new LAQuestion('Explain the process of photosynthesis.', 'Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods from carbon dioxide and water. Photosynthesis in plants generally involves the green pigment chlorophyll and generates oxygen as a byproduct.')]
	),
	new Test(
		'Test 3', 2,
		[
			new MCQuestion('Who wrote "To be, or not to be, that is the question"?', ['A: Leonardo da Vinci', 'B: William Shakespeare', 'C: Galileo Galilei', 'D: Winston Churchill'], 'B: William Shakespeare'),
			new MCQuestion('What is the capital of Italy?', ['A: Rome', 'B: Paris', 'C: Berlin', 'D: Madrid'], 'A: Rome')
		],
		[new LAQuestion('Describe the theory of relativity.', 'The theory of relativity, developed by Albert Einstein, encompasses two theories: special relativity and general relativity. Special relativity applies to all physical phenomena in the absence of gravity. General relativity explains the law of gravitation and its relation to other forces of nature. It applies to the cosmological and astrophysical realm, including astronomy.')]
	),
	new Test(
		'Test 4', 3,
		[
			new MCQuestion('What is the smallest prime number?', ['A: 1', 'B: 2', 'C: 3', 'D: 5'], 'B: 2'),
			new MCQuestion('Which gas is most abundant in the Earth\'s atmosphere?', ['A: Oxygen', 'B: Hydrogen', 'C: Nitrogen', 'D: Carbon Dioxide'], 'C: Nitrogen')
		],
		[new LAQuestion('What is the significance of the Magna Carta?', 'The Magna Carta, signed in 1215, was the first document to put into writing the principle that the king and his government were not above the law. It laid the foundations for individual rights in international law.')]
	)
]);