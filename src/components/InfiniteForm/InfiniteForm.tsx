"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { getNextQuestions } from "@/utils/nextQuestion";
import { LoaderIcon } from "lucide-react";
import { Progress } from "../ui/progress";

const INIT_QUESTIONS = ["Name", "Favorite color"];
export const InfiniteForm = () => {
  const [formState, setFormState] = useState<Record<string, string>>({});
  const [questions, setQuestions] = useState(INIT_QUESTIONS);
  const [loading, setLoading] = useState(false);
  const [progressIdx, setProgressIdx] = useState(1);

  const onSubmit = async () => {
    setFormState({});
    setLoading(true);
    const response = await getNextQuestions(formState);
    setLoading(false);
    setQuestions(response);
    setProgressIdx((prev) => prev + 1);
  };

  return (
    <div className="flex justify-center items-center w-full h-full flex-col">
      {!loading ? (
        <div className="p-10 space-y-3 max-w-[800px] w-full">
          {progressIdx > 1 && <div className="flex w-full items-center justify-center mb-[40px]">
            <Progress value={(progressIdx / (progressIdx + 1)) * 100} className="w-[50%]  max-w-[500px]"/>
          </div>}
          {questions.map((q, i) => (
            <div key={i}>
              <div>{q}</div>
              <Input
                key={q}
                value={formState[q]}
                onChange={(e) =>
                  setFormState({ ...formState, [q]: e.target.value })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onSubmit();
                  }
                }}
              />
            </div>
          ))}
          <div className="flex justify-end w-full">
            <Button onClick={onSubmit} className="justify-self-end">
              Submit
            </Button>
          </div>
        </div>
      ) : (
        (progressIdx%3) !== 0 ? <div>
          <LoaderIcon className="w-10 h-10 animate-spin" />
        </div> : <div>
          <img src="/fbi.jpeg" className="w-[200px] h-[200px] animate-pulse rounded-xl" />
        </div>
      )}
    </div>
  );
};
