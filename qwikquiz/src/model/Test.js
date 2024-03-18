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
	constructor(name, mcQuestions, laQuestions) {
		//BUG: we might have to use an id for the test in the future.
		this.name = name;
		this.dateCreated = new Date();
		this.mcQuestions = mcQuestions;
		this.laQuestions = laQuestions;
	}
}
