<script>
  import { TestStore } from "../../../stores";
  import { page } from "$app/stores";

  // Gets the testId from the URL
  let testId = $page.params.testId;

  // Filters the TestStore to get the test with the matching ID
  let test = $TestStore.find((test) => test.id == testId);
</script>

<h1>{test.name}</h1>
<p>{test.dateCreated}</p>
