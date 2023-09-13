import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { SpringRef, animated, useSpring } from "@react-spring/web";

interface PopUpImageProps {
  imgStyle?: React.CSSProperties;
  src: string;
  href?: string;
}

export const PopUpImage = ({ src, imgStyle, href }: PopUpImageProps) => {
  const [imageSpring, imageApi] = useSpring(() => ({
    config: { precision: 0.0001 },
  }));

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(0.6);
  const [imgref, inView] = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView) {
      handleDisappear(inView, imageApi);
    } else {
      handleDisappear(inView, imageApi);
    }
  }, [inView]);

  useEffect(() => {
    if (opacity == 1) {
      setOpacity(0.6);
    } else if (opacity != 1) {
      setOpacity(1);
    }
  }, [isHovered]);

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
      {href ? (
        <a
          style={{ opacity: opacity }}
          href={href}
          onMouseEnter={() => setIsHovered(!isHovered)}
          onMouseLeave={() => setIsHovered(!isHovered)}
        >
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
        </a>
      ) : (
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
      )}
    </>
  );
};
