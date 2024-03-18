import { writable } from 'svelte/store';
import { Test } from './model/test';

export const TestStore = writable([
	new Test(
		'Test 1',
		[new MCQuestion('What is 1+1?', ['1', '2', '3', '4'], '2')],
		[new LAQuestion('What is the capital of France?', 'Paris')]
	)
]);
