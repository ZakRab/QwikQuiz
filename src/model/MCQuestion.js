/**
 * Class representing a multiple choice question.
 */
export class MCQuestion {
	/**
	 * Create a multiple choice question.
	 * @param {string} question - The question.
	 * @param {string[]} options - The options.
	 * @param {string} answer - The answer.
	 */
	constructor(question, options, answer) {
		this.question = question;
		this.options = options;
		this.answer = answer;
	}

	toString() {
		let output = this.question + " \n";
		for (let i = 0; i < this.options.length; i++) {
			output += this.options[i] + " \n";
		}
		return output;
	}
}
