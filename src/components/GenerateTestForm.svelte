<script>
  import { Test } from "../model/Test"
  import { TestStore } from "../stores";
  import { MCQuestion } from "../model/mcQuestion";
  import { LAQuestion } from "../model/laQuestion";
  let prompt = "";
  let testName = "";
  async function handleSubmit() {
    if ( !(prompt.length > 0 && testName.length > 0)){
      alert("Please enter a prompt and a test name");
      return;
    }
    const response = await fetch("/generateTest", {
      method: "POST",
      body: JSON.stringify({ test: prompt }),
    });

    const data = await response.json();

    let parsedData = parseData(data);

    prompt = ""; // Reset prompt
    testName = ""; // Reset prompt
    handleData(parsedData);
  }

  function parseData(data) {
    let parsedData = data.chatCompletion.choices[0].message.content;
    console.log(parsedData);
    return parsedData;
  }

  function handleData(testData) {
    // Parsing event data
    if (typeof testData === "string") {
      //FIXME: Make sure that it actually parses correctly because currently it is not.
      testData = JSON.parse(testData);
    }

    // Assuming testData is structured correctly for a single MCQuestion for simplicity
    // You might need to adjust this based on your actual data structure
    const mcQuestion = new MCQuestion(
      testData.question,
      testData.options,
      testData.answer
    );

    // Instantiate a Test object
    //FIXME: Make sure that the Test object is instantiated correctly
    const newTest = new Test(
      testName,
      Date.now(),
      "Dynamic Tag",
      [mcQuestion],
      [new LAQuestion()]
    );

    // Updates the store with the new Test object
    TestStore.update((currentTests) => [...currentTests, newTest]);
  }
</script>



<form
  on:submit|preventDefault={handleSubmit}
  class="flex flex-col gap-2 items-center mt-10"
>
  <input
    class="border-2 border-black rounded-md p-2 w-1/3"
    type="text"
    bind:value={testName}
    placeholder="Enter a name for the test"
  />
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
