'use client';

import { cn } from "@/lib/utils";

interface ConnectionBoxProps {
    name: string;
    selected: boolean;
    onClick: () => void;
    bordered?: boolean;
}

export const ConnectionBox: React.FC<ConnectionBoxProps> = ({ name, selected, onClick, bordered }) => {
    const toggleSelected = () => onClick();
    
    return (
        <div
            className={cn("m-1 aspect-square flex justify-center items-center border rounded-md text-xs cursor-pointer", {
                "bg-slate-800 text-white": selected,
                "bg-slate-100 text-black": !selected,
                "border-black": bordered
            })}
            onClick={toggleSelected}
        >
            {name}
        </div>
    );
};
