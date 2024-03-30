import { DistractionModal } from "@/components/DistractionModal/DistractionModal";
import { InfiniteForm } from "@/components/InfiniteForm/InfiniteForm";

export const DISTRACTIONS = (onClose: () => void) => {
  return [
    <DistractionModal onClose={onClose} name="Cat bounce" key={1}>
      <iframe src="https://cat-bounce.com/" className="w-full h-full" />
    </DistractionModal>,
    <DistractionModal onClose={onClose} name="Pointer Pointer" key={3}>
      <iframe src="https://pointerpointer.com/" className="w-full h-full" />
    </DistractionModal>,
    <DistractionModal onClose={onClose} name="Infinite Form" key={4}>
      <InfiniteForm />
    </DistractionModal>
  ];
};
