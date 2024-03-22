<script>
  import { onMount } from "svelte";
  import OpenAI from "openai";
  import NavBar from "../../components/NavBar.svelte";
  import { generatePDF } from "../../lib/generatePDF.js";

  let prompt =
    "economics multiple choice test about supply and demand I want three free response questions as well";
  let response = "";

  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true, // This is the default and can be omitted
  });

  async function generateTest() {
    console.log("function hit");
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content:
            "make a " +
            prompt +
            " formatted mock test with no more than 50 characters per line and the answers at the end of the response",
        },
      ],
      model: "gpt-3.5-turbo",
    });
    response = chatCompletion;
    console.log(response);

    // Call createPdf here if you have a response
    if (response.choices && response.choices.length > 0) {
      generatePDF(response.choices[0].message.content);
    }
  }
</script>

<main>
  <NavBar></NavBar>
  <!-- Fixed: Pass generateTest as a reference -->
  <button on:click={generateTest()}>Generate</button>

  {#if response != ""}
    <!-- Display the response without invoking side-effects -->
    <p>{@html response.choices[0].message.content}</p>
  {/if}
</main>
