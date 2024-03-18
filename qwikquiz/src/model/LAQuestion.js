import Question from './Question';

/**
 * Class representing a long answer question.
 */
export class LAQuestion extends Question {
	/**
	 * Create a long answer question.
	 * @param {string} question - The question.
	 * @param {string} answer - The answer.
	 */
	constructor(question, options, answer) {
		super(question);
		this.answer = answer;
	}
}
