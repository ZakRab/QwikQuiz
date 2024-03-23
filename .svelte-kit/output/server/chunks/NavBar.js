import { w as writable } from "./index.js";
import { c as create_ssr_component } from "./ssr.js";
class Test {
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
    this.id = id;
    this.dateCreated = /* @__PURE__ */ new Date();
    this.mcQuestions = mcQuestions;
    this.laQuestions = laQuestions;
  }
  /**
   * toString method for the class Test
   * @returns {String} - The string representation of the test
   */
  toString() {
    let output = `Test Name: ${this.name}
`;
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
class MCQuestion {
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
class LAQuestion {
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
    return this.question + "\n";
  }
}
const TestStore = writable([
  new Test(
    "Test 1",
    0,
    [new MCQuestion("What is 1+1?", ["A: 1", "B: 2", "C: 3", "D: 4"], "B: 2")],
    [new LAQuestion("What is the capital of France?", "Paris")]
  ),
  new Test(
    "Test 2",
    1,
    [
      new MCQuestion("What is the largest planet in our solar system?", ["A: Mars", "B: Earth", "C: Jupiter", "D: Saturn"], "C: Jupiter"),
      new MCQuestion("Which element has the chemical symbol O?", ["A: Gold", "B: Oxygen", "C: Silver", "D: Helium"], "B: Oxygen")
    ],
    [new LAQuestion("Explain the process of photosynthesis.", "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods from carbon dioxide and water. Photosynthesis in plants generally involves the green pigment chlorophyll and generates oxygen as a byproduct.")]
  ),
  new Test(
    "Test 3",
    2,
    [
      new MCQuestion('Who wrote "To be, or not to be, that is the question"?', ["A: Leonardo da Vinci", "B: William Shakespeare", "C: Galileo Galilei", "D: Winston Churchill"], "B: William Shakespeare"),
      new MCQuestion("What is the capital of Italy?", ["A: Rome", "B: Paris", "C: Berlin", "D: Madrid"], "A: Rome")
    ],
    [new LAQuestion("Describe the theory of relativity.", "The theory of relativity, developed by Albert Einstein, encompasses two theories: special relativity and general relativity. Special relativity applies to all physical phenomena in the absence of gravity. General relativity explains the law of gravitation and its relation to other forces of nature. It applies to the cosmological and astrophysical realm, including astronomy.")]
  ),
  new Test(
    "Test 4",
    3,
    [
      new MCQuestion("What is the smallest prime number?", ["A: 1", "B: 2", "C: 3", "D: 5"], "B: 2"),
      new MCQuestion("Which gas is most abundant in the Earth's atmosphere?", ["A: Oxygen", "B: Hydrogen", "C: Nitrogen", "D: Carbon Dioxide"], "C: Nitrogen")
    ],
    [new LAQuestion("What is the significance of the Magna Carta?", "The Magna Carta, signed in 1215, was the first document to put into writing the principle that the king and his government were not above the law. It laid the foundations for individual rights in international law.")]
  )
]);
const css = {
  code: "nav.svelte-ytx06z{display:flex;justify-content:space-between;width:100vw;padding:2.5vw 5vw}.logo.svelte-ytx06z{font-size:1.75rem;text-decoration:none;color:black}.button-wrapper.svelte-ytx06z{display:flex}",
  map: null
};
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="svelte-ytx06z" data-svelte-h="svelte-1gytja9"><a href="/" class="logo svelte-ytx06z">QwikQuiz</a> <div class="button-wrapper svelte-ytx06z"><a href="/generateTest" class="btn btn-primary">Generate Test</a></div> </nav>`;
});
export {
  NavBar as N,
  TestStore as T
};
