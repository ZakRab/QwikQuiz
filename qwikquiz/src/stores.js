import { writable } from 'svelte/store';
import { Test } from './model/test';
import { MCQuestion } from './model/mcQuestion';
import { LAQuestion } from './model/laQuestion';
export const TestStore = writable([
	new Test(
		'Test 1',
		[new MCQuestion('What is 1+1?', ['A: 1', 'B: 2', 'C: 3', 'D: 4'], '2')],
		[new LAQuestion('What is the capital of France?', 'Paris')]
	)
]);
