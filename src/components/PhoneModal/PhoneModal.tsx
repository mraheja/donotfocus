import { BellRingIcon } from "lucide-react";
import { Card } from "../ui/card";

export const PhoneModal = () => {
  return (
    <div className="absolute bottom-3 right-3">
      <Card className="flex flex-row p-3 bg-slate-200 space-x-3 items-center animate-pulse">
        <BellRingIcon className="w-6 h-6" />
        <div className="flex flex-col items-center">
          <span className="text-xs italic">Call me!</span>
          <span className="font-semibold text-sm">510-674-3252</span>
        </div>
      </Card>
    </div>
  );
};
