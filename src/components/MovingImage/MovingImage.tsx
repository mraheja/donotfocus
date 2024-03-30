import { useEffect, useState } from "react";

export interface MovingImageProps {
  src: string;
}

export const MovingImage = ({ src }: MovingImageProps) => {
  const [trumpetTop, setTrumpetTop] = useState(
    Math.random() * window.innerHeight
  );
  const [trumpetLeft, setTrumpetLeft] = useState(
    Math.random() * window.innerWidth
  );

  useEffect(() => {
    setInterval(() => {
      setTrumpetTop((Math.random() * window.innerHeight - 200) + 100);
      setTrumpetLeft((Math.random() * window.innerWidth - 200) + 100);
    }, 2000);
  }, []);

  const trumpetStyle: React.CSSProperties = {
    position: "absolute",
    top: trumpetTop,
    left: trumpetLeft,
  };

  return (
    <div>
      <img
        src={src}
        style={trumpetStyle}
        width={100}
        height={100}
        decoding="async"
        loading="lazy"
        className="animate-bounce"
      />
    </div>
  );
};
