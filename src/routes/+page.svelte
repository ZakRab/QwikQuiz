<script>
  import { TestStore } from "../stores";
  import TestCard from "../components/TestCard.svelte";
  import NavBar from "../components/NavBar.svelte";
  import { slide, fade } from "svelte/transition";
  import { cubicOut, cubicIn } from "svelte/easing";
</script>

<main class="px-24 py-8 h-svh bg-slate-100 flex flex-col gap-14">
  <NavBar></NavBar>
  <div class="flex flex-col p-4 bg-white rounded-xl">
    <h4 class="text-xl font-bold font-sans">Recent Tests</h4>

    {#each $TestStore.slice(0, 4) as test (test.id)}
      <div
        in:fade={{ duration: 500, delay: 750, easing: cubicOut }}
        out:slide={{ duration: 500, delay: 0, easing: cubicIn }}
      >
        <TestCard {test} />
      </div>
    {/each}
  </div>
</main>
