<script>
  import { TestStore } from "../stores";
  import TestCard from "../components/TestCard.svelte";
  import NavBar from "../components/NavBar.svelte";
</script>

<NavBar></NavBar>
<h4>Main Page</h4>
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
  h4 {
    padding: 2.5vw 5vw;
  }
</style>
