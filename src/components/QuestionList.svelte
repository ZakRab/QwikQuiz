<script>
  export let mcQuestionList;

  // Initialize the feedback array to store the feedback for each question
  let feedback = [];

  //NOTE: For future reference, it may be important to store the user feedback and see how many incorrect questions and correct ones they got.
  /**
   * Handles the form submission
   * @param event The form submission event
   */
  function handleSubmit(event) {
    event.preventDefault();

    // Reset the feedback array
    feedback = mcQuestionList.map((question, index) => {
      // Get the selected option from the form
      const selectedOption = event.target[`question_${index}`].value;
      // Check if the selected option is correct
      const isCorrect = selectedOption === question.answer;
      return {
        question: `Question ${index + 1}`,
        isCorrect,
        correctAnswer: question.answer,
        selectedAnswer: selectedOption,
      };
    });
  }
</script>

<form on:submit={handleSubmit}>
  {#each mcQuestionList as mcQuestion, index}
    <div class="flex flex-col">
      <h3>{mcQuestion.question}</h3>
      {#each mcQuestion.options as option, optionIndex}
        <label>
          <!-- Made sure to add a required tag so dumbasses like me don't click without selecting an awnser -->
          <input
            type="radio"
            name={"question_" + index}
            value={option}
            required={optionIndex === 0}
          />
          {option}
        </label>
      {/each}
    </div>
  {/each}

  <button class="bg-cyan-500 text-white rounded-md px-3 py-2" type="submit"
    >Submit</button
  >
</form>

{#if feedback.length > 0}
  <h1>Feedback</h1>
  {#each feedback as item}
    <!-- NOTE: The class is determined by the isCorrect property of the item and uses a inline if statement-->
    <p class={item.isCorrect ? "correct" : "incorrect"}>
      {item.question}: {item.isCorrect
        ? "Correct"
        : `Incorrect, Correct answer: ${item.correctAnswer.substring(0, 1)}, Your answer: ${item.selectedAnswer.substring(0, 1)}`}
    </p>
  {/each}
{/if}
