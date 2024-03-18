import Question from './Question';

/**
 * Class representing a multiple choice question.
 */
export class MCQuestion extends Question {
	/**
	 * Create a multiple choice question.
	 * @param {string} question - The question.
	 * @param {string[]} options - The options.
	 * @param {string} answer - The answer.
	 */
	constructor(question, options, answer) {
		super(question);
		this.options = options;
		this.answer = answer;
	}
}
