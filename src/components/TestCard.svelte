<script>
  import { TestStore } from "../stores";
  export let test;
  // import { generatePDF } from "../lib/generatePDF.js";

  /**
   * Deletes a test from the TestStore
   * @param testId The ID of the test to delete
   */
  function handleDelete(testId) {
    TestStore.update((curr) => {
      return curr.filter((test) => test.id !== testId);
    });
  }
</script>

<div class="card">
  <div class="card-body">
    <div class="card-left-wrapper">
      <!-- <button
        on:click={generatePDF(test.toString())}
        class="btn btn-primary d-inline">D</button
      > -->
      <h6 class="card-title d-inline">{test.name}</h6>
    </div>

    <div class="card-right-wrapper">
      <a
        class="btn btn-primary d-inline"
        href="/test/{test.id}"
        data-sveltekit-preload-data>View Test</a
      >
      <button on:click={handleDelete(test.id)} class="btn btn-danger d-inline"
        >Delete</button
      >
    </div>
    <!-- /test/{test.id} it is basically a parameter which is populating the route test/[test.id]-->
  </div>
</div>

<style>
  .card-left-wrapper {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .card-right-wrapper {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .card-body {
    display: flex;
    justify-content: space-between;
  }
</style>
