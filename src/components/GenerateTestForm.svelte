<script>
  import _generateTest from "../routes/generateTest/+page.server";

  // Store the user input in the prompt variable
  let prompt = "";

  function handleSubmit() {
    console.log(prompt);
    _generateTest(prompt);
    prompt = "";
  }
</script>

<form
  on:submit|preventDefault={handleSubmit}
  class="flex flex-col gap-2 items-center mt-10"
>
  <input
    class="border-2 border-black rounded-md p-2 w-1/3"
    type="text"
    bind:value={prompt}
    placeholder="Enter a prompt"
  />
  <button class="bg-black text-white w-1/3 rounded-md p-2" type="submit">
    Submit
  </button>
</form>
