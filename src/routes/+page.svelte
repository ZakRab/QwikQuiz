<script>
  import { TestStore } from "../stores";
  import TestCard from "../components/TestCard.svelte";
  import NavBar from "../components/NavBar.svelte";
</script>

<main class="px-24 py-8 h-svh bg-slate-100 flex flex-col gap-14">
  <NavBar></NavBar>
  <h4 class="text-xl font-bold font-sans">Recent Tests</h4>
  <div class="flex flex-col gap-3">
    <!-- Loop through the TestStore and display each test -->
    {#each $TestStore as test (test.id)}
      <TestCard {test}></TestCard>
    {/each}
  </div>
</main>
