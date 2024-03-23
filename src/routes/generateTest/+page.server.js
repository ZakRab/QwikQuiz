import OpenAI from "openai";
import { OPENAI_API_KEY } from '$env/static/private';

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
});

// const assistantId = "asst_hcIGdvaK5eofnlgFpK1X0VvM";

// // Retrieve an assistant
// const assistant = await openai.beta.assistants.retrieve("asst_hcIGdvaK5eofnlgFpK1X0VvM")

// // Create a thread
// const threads = await openai.beta.threads.create();

// // Create a message
// const message = await openai.beta.threads.messages.create(
//     threads.id, {
//     role: "user",
//     content: "What is the capital of the United States?",
// });

// // Run assitant 
// const run = await openai.beta.threads.runs.create(threads.id, {
//     assistant_id: assistant.id,
//     instructions: "Address the user as Leon"
// })

// const run = await openai.beta.threads.runs.retrieve("thread_eg8tWuXHgluTMMYiudeNxhOO", "run_tKRAu1c2yOkv4oyFmoegz9oI")
// console.log(run);

// const messages = await openai.beta.threads.messages.list(
//     "thread_eg8tWuXHgluTMMYiudeNxhOO"
// );

// messages.body.data.forEach(message => {
//     console.log(message.content);
// })

const logs = await openai.beta.threads.runs.steps.list(
    "thread_eg8tWuXHgluTMMYiudeNxhOO",
    "run_tKRAu1c2yOkv4oyFmoegz9oI"
);

logs.body.data.forEach(log => {
    console.log(log.step_details);
});