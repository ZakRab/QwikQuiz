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

<!-- TODO: Because most of the buttons all have a 3D effect make it so that style if a tag or something so that the css isn't crazy-->

<!-- Test Card -->
<div
  class="bg-white py-3 flex justify-between box-border items-center border-b-2 rounded-sm border-gray-100"
>
  <!--Left Wrapper-->
  <div class="flex flex-col text-lg">
    <h6 class="mt-2 text-md">{test.name}</h6>
    <p class="text-xs text-{test.tag.color}-400 w-fit rounded-lg font-normal">
      {test.tag.name}
    </p>
    <!-- FIXME: Make sure the spacing gets fixed. Right now due to the new field the spacing is off. -->
  </div>

  <!--Right Wrapper-->
  <div class="flex gap-3 items-center">
    <!-- NOTE: /test/{test.id} it is basically a parameter which is populating the route test/[test.id]-->
    <a
      class="py-2 px-3 text-md font-semibold bg-cyan-500 rounded-lg text-white hover:bg-cyan-600 shadow-md transition-all duration-300"
      href="/test/{test.id}"
      data-sveltekit-preload-data>View Test</a
    >
    <button
      on:click={handleDelete(test.id)}
      class="py-2 px-3 text-md font-semibold bg-gray-300 rounded-lg text-gray-800 hover:bg-gray-400 shadow-md transition-all duration-300"
      >Delete</button
    >
  </div>
</div>
