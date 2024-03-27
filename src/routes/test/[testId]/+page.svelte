<script>
  import { TestStore } from "../../../stores";
  import { page } from "$app/stores";
  import QuestionList from "../../../components/QuestionList.svelte";
  import NavBar from "../../../components/NavBar.svelte";
  import TestInfo from "../../../components/TestInfo.svelte";

  // Gets the testId from the URL
  let testId = $page.params.testId;

  // Filters the TestStore to get the test with the matching ID
  let test = $TestStore.find((test) => test.id == testId);
</script>

<main class="px-24 py-8 bg-slate-100">
  <NavBar></NavBar>
  <TestInfo {test}></TestInfo>
</main>
