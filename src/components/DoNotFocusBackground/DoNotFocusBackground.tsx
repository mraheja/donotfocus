import { MovingImage } from "../MovingImage/MovingImage";

export const DoNotFocusBackground = () => {
  return <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-50 -z-10 opacity-70">
    {[...Array(10)].map((_, i) => <MovingImage key={i} src="/trumpet.svg" />)}
    {[...Array(10)].map((_, i) => <MovingImage key={i} src="/party.svg" />)}
  </div>;
};


