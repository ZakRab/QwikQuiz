<script>
  import { TestStore } from "../stores";
  import TestCard from "../components/TestCard.svelte";
</script>

<h1>Main Page</h1>
<a class="btn btn-" href="/generateTest">generate</a>
<div class="test-list-container">
  {#each $TestStore as test (test.id)}
    <TestCard {test}></TestCard>
  {/each}
</div>

<style>
  .test-list-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 2.5vw 5vw;
  }
</style>
