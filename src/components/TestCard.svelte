<script>
  import { TestStore } from "../stores";
  export let test;
  import { generatePDF } from "../lib/generatePDF.js";

  /**
   * Deletes a test from the TestStore
   * @param testId The ID of the test to delete
   */
  function handleDelete(testId) {
    // Update the TestStore
    TestStore.update((curr) => {
      // Filter out the test with the given ID
      return curr.filter((test) => test.id !== testId);
    });
  }
</script>

<!-- Test Card -->
<div class="bg-white p-6 flex justify-between items-center rounded-xl">
  <!--Left Wrapper-->
  <div class="flex gap-3 items-center">
    <button on:click={generatePDF(test.toString())}
      ><img
        src="../../assets/QwikQuiz PDF Icon.png"
        alt=""
        class="w-5"
      /></button
    >
    <h6>{test.name}</h6>
  </div>

  <!--Right Wrapper-->
  <div class="flex gap-3">
    <!-- NOTE: /test/{test.id} it is basically a parameter which is populating the route test/[test.id]-->
    <a
      class="py-2 px-3 bg-cyan-500 rounded-md text-white shadow-md hover:shadow-sm hover:bg-cyan-600"
      href="/test/{test.id}"
      data-sveltekit-preload-data>View Test</a
    >
    <button
      on:click={handleDelete(test.id)}
      class="py-2 px-4 bg-gray-300 text-gray-800 rounded-md shadow-md hover:shadow-sm hover:bg-gray-400"
      >Delete</button
    >
  </div>
</div>
