<script>
  import { TestStore } from "../../../stores";
  import { page } from "$app/stores";
  import QuestionList from "../../../components/QuestionList.svelte";
  import NavBar from "../../../components/NavBar.svelte";

  // Gets the testId from the URL
  let testId = $page.params.testId;

  // Filters the TestStore to get the test with the matching ID
  let test = $TestStore.find((test) => test.id == testId);

  // Combines the multiple choice and long answer questions into one object
  let mcQuestionList = test.mcQuestions;
  let laQuestionList = test.laQuestions;
  console.log(test.toString());
</script>

<NavBar></NavBar>
<h1>{test.name}</h1>
<p>{test.dateCreated}</p>
<QuestionList {mcQuestionList} {laQuestionList} />
