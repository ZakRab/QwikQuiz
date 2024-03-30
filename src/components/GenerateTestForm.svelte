<script>
  import { createEventDispatcher } from "svelte";

  let prompt = "";
  const dispatch = createEventDispatcher();

  async function handleSubmit() {
    const response = await fetch("/generateTest", {
      method: "POST",
      body: JSON.stringify({ test: prompt }),
    });

    const data = await response.json();

    let parsedData = parseData(data);

    dispatch("submit", parsedData); // Emit an event with the data
    console.log(parsedData);
    prompt = ""; // Reset prompt
  }

  function parseData(data) {
    let parsedData = data.chatCompletion.choices[0].message.content;
    return parsedData;
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
  <button class="bg-black text-white w-1/3 rounded-md p-2" type="submit"
    >Submit</button
  >
</form>
