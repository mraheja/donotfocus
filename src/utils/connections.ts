"use server";

import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.TOGETHER_API_KEY,
  baseURL: "https://api.together.xyz/v1",
});

const SYSTEM_PROMPT = `

`

const USER_PROMPT_GET_WORDS = `
Give me a list of 20 random words that are all less than 8 characters.

You must answer in the form:
[WORD]: word

For example:
[WORD]: red
[WORD]: shirt

Try to make the words as random as possible.
`

const USER_PROMPT_GET_CONNECTION = (words: string[]) => `
find the short phrase that connects between ${words.map((w) => `"${w}"`).join(" and ")}. It should be kind of like the NYT connections game, where you find a common theme between all of them. Give me 5 different answers.

You must respond in the format:

[CONNECTION]: the connection

Example:

[CONNECTION]: All items that are blue

OR 

[CONNECTION]: All items that are used in a living room.

`

export const getRandomWords = async () => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: USER_PROMPT_GET_WORDS },
    ],
    model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
    max_tokens: 1024,
  });

  const responseContent = chatCompletion.choices[0].message.content;

  console.log("responseContent", responseContent);

  if (!responseContent) {
    return [];
  }

  const words = responseContent.split("\n").reduce<string[]>((acc, line) => {
    if(line.includes("[WORD]")){
      acc.push(line.slice(line.indexOf(']')+3));
    }
    return acc;
  }, []);

  return words.slice(0, 16);
};

export const getConnection = async (words: string[]) => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: USER_PROMPT_GET_CONNECTION(words) },
    ],
    model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
    max_tokens: 1024,
  });

  const responseContent = chatCompletion.choices[0].message.content;


  if (!responseContent) {
    return null;
  }

  console.log("responseContent", responseContent);

  const connectionStart = responseContent.indexOf("[CONNECTION]:") + 13;
  const connectionEnd = responseContent.indexOf("\n", connectionStart);
  const connection = responseContent.slice(connectionStart, connectionEnd);

  return connection;
};
