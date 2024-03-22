import { OpenAI } from "openai";
// dotenv.config();
console.log(process.env.VITE_OPENAI_API_KEY);
const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY,
});

const assistent = await openai.beta.assistants.retrieve(
  "asst_M5Of0iAdupbVsOIO"
);

console.log(assistent);
