import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SpringRef, animated, useSpring } from "@react-spring/web";

interface PopUpImageProps {
  imgStyle?: React.CSSProperties;
  src: string;
}

export const PopUpImage = ({ src, imgStyle }: PopUpImageProps) => {
  const [imageSpring, imageApi] = useSpring(() => ({
    config: { precision: 0.0001 },
  }));

  const [imgref, inView] = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView) {
      handleDisappear(inView, imageApi);
    } else {
      handleDisappear(inView, imageApi);
    }
  }, [inView]);

  const handleDisappear = (viewFlag: boolean, api: SpringRef<object>) => {
    api.start({
      from: {
        y: viewFlag ? 0 : -100,
        opacity: viewFlag ? 0 : 1,
      },
      to: {
        y: viewFlag ? -100 : 0,
        opacity: viewFlag ? 1 : 0,
      },
    });
  };

  return (
    <>
      <animated.img
        style={{
          width: "20vh",
          height: "auto",
          ...imageSpring,
          ...imgStyle,
        }}
        src={src}
        ref={imgref}
      />
    </>
  );
};
