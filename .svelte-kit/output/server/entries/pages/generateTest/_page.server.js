import OpenAI from "openai";
const OPENAI_API_KEY = "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";
new OpenAI({
  apiKey: OPENAI_API_KEY
});
console.log(OPENAI_API_KEY);
