import { DistractionModal } from "@/components/DistractionModal/DistractionModal";
import { InfiniteForm } from "@/components/InfiniteForm/InfiniteForm";
import { NotConnectionsGame } from "@/components/NotConnectionsGame/NotConnectionsGame";

export const DISTRACTIONS = (onClose: () => void) => {
  return [
    <DistractionModal onClose={onClose} name="Cat bounce" key={1}>
      <iframe src="https://cat-bounce.com/" className="w-full h-full" />
    </DistractionModal>,
    <DistractionModal onClose={onClose} name="Pointer Pointer" key={2}>
      <iframe src="https://pointerpointer.com/" className="w-full h-full" />
    </DistractionModal>,
    <DistractionModal onClose={onClose} name="Infinite Form" key={3}>
      <InfiniteForm />
    </DistractionModal>,
     <DistractionModal onClose={onClose} name="COV-Identify" key={4}>
     <iframe src="https://mraheja.github.io/COV-IDentify/index.html" className="w-full h-full" />
   </DistractionModal>,
    <DistractionModal onClose={onClose} name="Not Connections Game" key={5}>
      <NotConnectionsGame />
    </DistractionModal>,
  ];
};
