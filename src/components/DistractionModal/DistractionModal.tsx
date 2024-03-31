import { X, XIcon } from "lucide-react";
import { Card } from "../ui/card";

interface DistractionModalProps {
  onClose: () => void;
  name: string;
}

export const DistractionModal: React.FC<
  React.PropsWithChildren<DistractionModalProps>
> = ({ onClose, name, children }) => {
  return (
    <>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-transparent z-20 justify-center items-center flex">
        <Card className="w-[800px] h-[700px] z-30 bg-white flex flex-col">
          <div className="p-2 flex justify-between w-full border-b">
            <span />
            <span>{name}</span>
            <XIcon className="w-5 h-5 cursor-pointer" onClick={onClose} />
          </div>
          <div className="flex-1 overflow-scroll">{children}</div>
        </Card>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-slate-200 z-10 opacity-30" />
    </>
  );
};
