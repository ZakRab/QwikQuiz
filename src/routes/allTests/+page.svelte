<script>
  import { TestStore } from "../../stores";
  import TestCard from "../../components/TestCard.svelte";
  import NavBar from "../../components/NavBar.svelte";
</script>

<main class="px-24 py-8 h-svh bg-slate-100 flex flex-col gap-14">
  <NavBar></NavBar>
  <div class="flex flex-col px-4 py-8 bg-white rounded-xl">
    <h4 class="text-xl font-bold font-sans">Recent Tests</h4>

    {#each $TestStore as test (test.id)}
      <div
        in:fade={{ duration: 250, delay: 0, easing: cubicIn }}
        out:slide={{ duration: 500, delay: 100, easing: cubicIn }}
      >
        <TestCard {test} />
      </div>
    {/each}
  </div>
</main>