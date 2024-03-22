/**
 * Class representing a long answer question.
 */
export class LAQuestion {
	/**
	 * Create a long answer question.
	 * @param {string} question - The question.
	 * @param {string} answer - The answer.
	 */
	constructor(question, answer) {
		this.question = question;
		this.answer = answer;
	}

	toString() {
		return this.question + '\n'
	}
}
