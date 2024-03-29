import OpenAI from "openai";
import { json } from "@sveltejs/kit";
import {OPENAI_API_KEY} from "$env/static/private";
export async function POST(requestEvent) {
  const { request } = requestEvent;
  const {test} = await request.json();


  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
  });

  console.log("function hit");
  console.log(test);
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful test-making assistant. Given a test, your task is to create a new test that covers the same topics but with entirely different questions. Each question should explore the topic in a unique way compared to the original test. For each multiple-choice question in the new test, please format it in JSON as shown:" 
        + "{\"question\": \"<Your New Question>\", \"options\": [\"Option1\", \"Option2\", \"Option3\"], \"answer\": \"CorrectOption\"}." 
        + "For each short-answer question, please use the following format: "
       + "{\"question\": \"<Your New Short Answer Question>\", \"answer\": \"<Your Explanation>\"}. "
       + "Remember, the goal is to test the same knowledge areas but with fresh questions that require understanding, not memorization of the previous test."
        
      },
      { role: "user", content: test },
    ],
    model: "gpt-3.5-turbo",
    response_format: { type: "json_object" },
    max_tokens:1000,
  });

  return json({ chatCompletion, status: 200});
}