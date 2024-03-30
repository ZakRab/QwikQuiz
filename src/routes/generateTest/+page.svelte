<script>
  import GenerateTestForm from "../../components/GenerateTestForm.svelte";
  import { Test } from "../../model/Test";
  import { TestStore } from "../../stores";
  import { MCQuestion } from "../../model/mcQuestion";
  import { LAQuestion } from "../../model/laQuestion";
  import NavBar from "../../components/NavBar.svelte";

  function handleData(event) {
    let testData = event.detail;

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
      "Dynamic Test",
      Date.now(),
      "Dynamic Tag",
      [mcQuestion],
      [new LAQuestion()]
    );

    // Updates the store with the new Test object
    TestStore.update((currentTests) => [...currentTests, newTest]);
  }
</script>

<main class="px-24 py-8 h-svh bg-slate-100 flex flex-col gap-14">
  <NavBar></NavBar>
  <GenerateTestForm on:submit={handleData}></GenerateTestForm>
</main>
