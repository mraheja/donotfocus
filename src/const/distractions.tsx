import { DistractionModal } from "@/components/DistractionModal/DistractionModal";

export const DISTRACTIONS = (onClose: () => void) => {
  return [
    <DistractionModal onClose={onClose} name="Cat bounce">
      <iframe src="https://cat-bounce.com/" className="w-full h-full" />
    </DistractionModal>,
    <DistractionModal
      onClose={onClose}
      name="Endless Horse"
    >
      <iframe src="http://endless.horse/" className="w-full h-full" />
    </DistractionModal>,
  ];
};
