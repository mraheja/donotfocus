"use server";

import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.TOGETHER_API_KEY,
  baseURL: "https://api.together.xyz/v1",
});

const SYSTEM_PROMPT = `

`

const USER_PROMPT = (prevQuestions: Record<string, string>) => `
I asked these questions and got these responses on a form:

${Object.entries(prevQuestions).map(([q, resp]) => `${q}: ${resp ?? "no response"}`).join("\n\n")}

Come up with a list of slightly more invasive and intrusive questions to ask next. THEY SHOULD ONLY BE SOMEWHAT MORE INTRUSIVE, THERE ARE MANY STEPS OF INTRUSIVENESS WE STILL NEED TO GO THROUGH. ALSO TRY PERSONALIZING THEM BUT KEEP IT CONCISE AND THINGS YOU WOULD FIND IN AN ONLINE SURVEY.
YOU SHOULD FORMAT THEM AS IF THEY WERE TO SHOW UP ON A FORM (ABSOLUTELY DO NOT SAY THINGS LIKE "WHAT IS" OR "MAY I ASK YOU ABOUT"). MAKE ALL THE QUESTIONS THINGS THAT CAN BE ANSWERED THROUGH TEXT.

Please respond in the form:

[QUESTION]: question

For example:

[QUESTION]: Address
[QUESTION]: Annual Income
[QUESTION]: Marital Status

Give me only 3
`

export const getNextQuestions = async (state: Record<string, string>) => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: USER_PROMPT(state) },
    ],
    model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
    max_tokens: 1024,
  });

  const responseContent = chatCompletion.choices[0].message.content;

  console.log("responseContent", responseContent);

  if (!responseContent) {
    return [];
  }

  const questions = responseContent.split("\n").reduce<string[]>((acc, line) => {
    const match = line.trim().match(/^\[QUESTION\]: (.*)$/);
    if (match) {
      acc.push(match[1]);
    }
    return acc;
  }, []);

  console.log("questions", questions);
  return questions;
};
