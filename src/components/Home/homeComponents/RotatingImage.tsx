import React from "react";
import { animated, useSpring } from "@react-spring/web";

interface RotatingImageProps {
  style?: React.CSSProperties;
  img: string;
  width: number | string;
  height: number | string;
  duration?: number;
}

export const RotatingImage = ({
  style,
  img,
  width,
  height,
  duration,
}: RotatingImageProps) => {
  const imageSpring = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
    loop: true,
    config: { duration: duration ? duration : 3000 },
  });
  return (
    <animated.img
      style={{ ...style, ...imageSpring }}
      width={width ? width : 55}
      height={height ? height : 55}
      src={img}
    />
  );
};
