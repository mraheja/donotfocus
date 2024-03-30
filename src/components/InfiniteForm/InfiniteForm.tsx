"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { getNextQuestions } from "@/utils/nextQuestion";

const INIT_QUESTIONS = ["What is your name?", "What is your favorite color?"];
export const InfiniteForm = () => {
  const [formState, setFormState] = useState<Record<string, string>>({});
  const [questions, setQuestions] = useState(INIT_QUESTIONS);
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setFormState({});
    setLoading(true);
    const response = await getNextQuestions(formState);
    setLoading(false);
    setQuestions(response);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      {!loading ? <div className="p-10 space-y-3 max-w-[800px] w-full">
        {questions.map((q, i) => (
          <div key={i}>
            <div>{q}</div>
            <Input
              key={q}
              value={formState[q]}
              onChange={(e) =>
                setFormState({ ...formState, [q]: e.target.value })
              }
            />
          </div>
        ))}
        <div className="flex justify-end w-full">
        <Button onClick={onSubmit} className="justify-self-end">Submit</Button>
        </div>
      </div> : <div> loading </div> }
    </div>
  );
};
