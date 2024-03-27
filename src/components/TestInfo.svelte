<script>
  // Import the TestStore
  import { TestStore } from "../stores";
  import QuestionList from "./QuestionList.svelte";
  // Export the test variable so that it can be used in other components
  export let test;

  // Combines the multiple choice and long answer questions into one object
  let mcQuestionList = test.mcQuestions;
  let laQuestionList = test.laQuestions;
</script>

<!-- Test Heading Info -->
<div class="bg-white">
  <h1 class="text-xl font-bold">{test.name}</h1>
  <p class="text-md text-gray-500 text-{test.tag.color}-500">{test.tag.name}</p>
</div>

<!-- Test Questions -->
<QuestionList {mcQuestionList} {laQuestionList}></QuestionList>
