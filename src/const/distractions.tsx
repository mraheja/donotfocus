import { DistractionModal } from "@/components/DistractionModal/DistractionModal";

export const DISTRACTIONS = (onClose: () => void) => {
  return [
    <DistractionModal onClose={onClose} name="Cat bounce" key={1}>
      <iframe src="https://cat-bounce.com/" className="w-full h-full" />
    </DistractionModal>,
    <DistractionModal onClose={onClose} name="Endless Horse" key={2}>
      <iframe src="http://endless.horse/" className="w-full h-full" />
    </DistractionModal>,
    <DistractionModal onClose={onClose} name="Pointer Pointer" key={3}>
      <iframe src="https://pointerpointer.com/" className="w-full h-full" />
    </DistractionModal>,
  ];
};
