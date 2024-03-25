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
<div
  class="bg-white p-6 flex justify-between box-border items-center border-b-4 border-gray-300 rounded-xl"
>
  <!--Left Wrapper-->
  <div class="flex gap-3 font-semibold text-gray-900 text-lg items-center">
    <button on:click={generatePDF(test.toString())}
      ><img
        src="../../assets/QwikQuiz PDF Icon.png"
        alt=""
        class="w-5 hover:scale-110 transition-all duration-300"
      /></button
    >
    <div class="flex flex-col">
      <h6>{test.name}</h6>
      <!-- TODO: Add a class for color so that I can get a color for the class name-->
      <!-- FIXME: Make sure the spacing gets fixed. Right now due to the new field the spacing is off. -->
      <p class="text-xs text-gray-500 font-normal">{test.tag.name}</p>
    </div>
  </div>

  <!--Right Wrapper-->
  <div class="flex gap-3">
    <!-- NOTE: /test/{test.id} it is basically a parameter which is populating the route test/[test.id]-->
    <a
      class="py-2 px-3 text-md font-semibold bg-cyan-500 rounded-xl text-white border-b-4 border-cyan-600 hover:translate-y-0.5 hover:border-b-4 hover:border-transparent hover:bg-cyan-600 shadow-md hover:shadow-lg transition-all duration-300"
      href="/test/{test.id}"
      data-sveltekit-preload-data>View Test</a
    >
    <button
      on:click={handleDelete(test.id)}
      class="py-2 px-3 text-md font-semibold bg-gray-300 rounded-xl text-gray-800 border-b-4 border-gray-400 hover:translate-y-0.5 hover:border-b-4 hover:border-transparent hover:bg-gray-400 shadow-md hover:shadow-lg transition-all duration-300"
      >Delete</button
    >
  </div>
</div>
