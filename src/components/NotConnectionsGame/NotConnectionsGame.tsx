"use client";

import { useEffect, useState } from "react";
import { ConnectionBox } from "./ConnectionBox";
import { getConnection, getRandomWords } from "@/utils/connections";
import { LoaderIcon } from "lucide-react";

const RANDOM_WORDS = Array(16).fill("hiiiiiiiiiii");

export const NotConnectionsGame = () => {
  const [words, setWords] = useState<string[]>([]);
  const [selected, setSelected] = useState<boolean[]>(Array(16).fill(false));
  const [bordered, setBordered] = useState<boolean[]>(Array(16).fill(false));
  const [ready, setReady] = useState(false);
  const [connection, setConnection] = useState<string | null>(null);
  const [gettingConnection, setGettingConnection] = useState(false);

  useEffect(() => {
    if (ready) return;
    getRandomWords().then((words) => {
      console.log("WORDS", words);
      setWords(words);
      setReady(true);
    });
  }, []);

  const toggle = (i: number) => {
    setSelected((prev) => {
      if (!prev) return [true];
      return [...prev.slice(0, i), !prev[i], ...prev.slice(i + 1)];
    });
  };

  useEffect(() => {
    if (selected.filter(Boolean).length === 4) {
      const selectedIndices = selected
        .map((sel, i) => (sel ? i : -1))
        .filter((i) => i !== -1);
      const selectedWords = selectedIndices.map((i) => words[i]);

      setBordered(selected);

      setGettingConnection(true);
      getConnection(selectedWords).then((connection) => {
        setConnection(connection);
        setGettingConnection(false);
      });
      setSelected(Array(16).fill(false));
    }
  }, [selected]);

  return (
    <>
      {ready ? (
        <div className="grid grid-cols-4 w-[300px]">
          {words.map((w, i) => (
            <ConnectionBox
              key={i}
              name={w}
              onClick={() => toggle(i)}
              selected={selected?.[i] ?? false}
              bordered ={bordered?.[i] ?? false}
            />
          ))}
          {(connection || gettingConnection) && (gettingConnection ? <div className="flex justify-center items-center w-full"><LoaderIcon className="w-10 h-10 animate-spin p-3" /></div> : <span className="w-[300px] text-center flex flex-col mt-3 space-y-2"><span>Connection Found:</span><span className="italic">{connection}</span></span>)}
        </div>
      ) : (
        <LoaderIcon className="w-10 h-10 animate-spin p-10" />
      )}
    </>
  );
};
