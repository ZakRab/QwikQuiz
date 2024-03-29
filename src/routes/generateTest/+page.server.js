import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});
export async function _generateTest(userTest) {
    console.log("function hit");
    const chatCompletion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "You are a helpful test making assistant,"
                + "that given a test you remix it and output JSON with the following format for each multiple choice question in the test"
                + " {\"question\": \"What is 5 + 5?\", \"options\": [\"10\", \"15\", \"20\"], \"answer\": \"10\"}. "
                + "And the following format for each short answer question in the test:"
                + "{\"question\": \"explain the concept of supply and demand\", \"answer\": \"Supply and demand is an economic model that explains how the availability of a product (supply) and the desire for it (demand) determine its price.\"}, for each multiple choice question in the test."
              },
              { role: "user", content: userTest },
        ],
        model: "gpt-3.5-turbo",
        response_format: { type: "json_object" },
        max_tokens:1000,
    });
    return chatCompletion;
}