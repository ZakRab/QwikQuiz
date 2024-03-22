/**
 * Class for tests with id, name, questions and answers
 */
export class Test {
	/**
	 * Constructor for the class Test
	 *
	 * @param {String} name - The name of the test
	 * @param {number} id - The id of the test
	 * @param {Date} dateCreated - The date the test was created
	 * @param {MCQuestion[]} mcQuestions - The multiple choice questions of the test
	 * @param {LAQuestion[]} laQuestions - The long answer questions of the test
	 */
	constructor(name, id, mcQuestions, laQuestions) {
		this.name = name;
		this.id = id
		this.dateCreated = new Date();
		this.mcQuestions = mcQuestions;
		this.laQuestions = laQuestions;

	}

	/**
	 * toString method for the class Test
	 * @returns {String} - The string representation of the test
	 */
	toString() {
		let output = `Test Name: ${this.name}\n`;
		let mcQuestionsStr = "Multiple Choice Questions: \n";
		let laQuestionsStr = "Long Answer Questions: \n";
		for (let i = 0; i < this.mcQuestions.length; i++) {
			mcQuestionsStr += this.mcQuestions[i].toString() + "\n";
		}
		for (let i = 0; i < this.laQuestions.length; i++) {
			laQuestionsStr += this.laQuestions[i].toString() + "\n";
		}
		return output + mcQuestionsStr + laQuestionsStr;
	}

}
