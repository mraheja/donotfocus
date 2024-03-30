import { X, XIcon } from "lucide-react";
import { Card } from "../ui/card";

interface DistractionModalProps {
  onClose: () => void;
}

export const DistractionModal = ({ onClose }: DistractionModalProps) => {
  return (
    <>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-transparent z-20 justify-center items-center flex">
        <Card className="w-[800px] h-[500px] z-30 bg-white">
          <div className="p-2 flex justify-end">
            <XIcon className="w-5 h-5 cursor-pointer" onClick={onClose} />
          </div>
        </Card>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-slate-200 z-10 opacity-30" />
    </>
  );
};
