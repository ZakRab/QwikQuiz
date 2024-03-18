const { Configuration, OpenAIApi } = require('openai');

// Set your OpenAI API key here (preferably use an environment variable)
const openai = new OpenAIApi(
	new Configuration({
		apiKey: process.env.OPENAI_API_KEY
	})
);

const assistantId = 'asst_M5Of0iAdupbVsOIO';

async function createThread(assId, prompt) {
	// Create a thread
	const threadResponse = await openai.createThread();
	const myThreadId = threadResponse.data.id;

	// Create a message in the thread
	await openai.createMessage({
		thread_id: myThreadId,
		role: 'user',
		content: prompt
	});

	// Run the assistant on the thread
	const runResponse = await openai.createRun({
		thread_id: myThreadId,
		assistant_id: assId
	});

	return { runId: runResponse.data.id, threadId: myThreadId };
}

async function checkStatus(runId, threadId) {
	const run = await openai.getRun({
		thread_id: threadId,
		run_id: runId
	});
	return run.data.status;
}

async function main() {
	const { runId, threadId } = await createThread(assistantId, '[topic]: make money with chatgpt');

	let status = await checkStatus(runId, threadId);
	while (status !== 'completed') {
		await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds
		status = await checkStatus(runId, threadId);
	}

	const response = await openai.listMessages({
		thread_id: threadId
	});

	if (response.data) {
		console.log(response.data[0].content[0].text.value);
	}
}

main().catch(console.error);
