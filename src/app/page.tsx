"use client";

import { DoNotFocusBackground } from "@/components/DoNotFocusBackground/DoNotFocusBackground";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { DistractionModal } from "@/components/DistractionModal/DistractionModal";
import { DISTRACTIONS } from "@/const/Distractions";

export default function Home() {
  const [doNotFocus, setDoNotFocus] = useState(false);
  const [distractionOpen, setDistractionOpen] = useState(false);

  const startDistractionTimeout = () => {
    setTimeout(() => {
      setDistractionOpen(true);
    }, 3000);
  };

  const onClose = useCallback(() => {
    setDistractionOpen(false);
    startDistractionTimeout();
  }, []);

  const distractions = DISTRACTIONS(onClose);

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div
        className={cn(
          "mb-3 text-2xl",
          doNotFocus
            ? "bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl font-black animate-text"
            : ""
        )}
      >
        {!doNotFocus ? "Focus" : "Do Not Focus"} Mode
      </div>
      <Switch
        className="h-[50px] w-[100px]"
        checked={doNotFocus}
        onCheckedChange={(checked) => {
          setDoNotFocus(checked);

          if (checked) {
            startDistractionTimeout();
          }
        }}
      />
      {doNotFocus && <DoNotFocusBackground />}
      {distractionOpen && (
        distractions[Math.floor(Math.random() * distractions.length)]
      )}
    </main>
  );
}
