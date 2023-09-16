import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SpringRef, animated, useSpring } from "@react-spring/web";
import { RanMs } from "../../helpers/helpers";

interface FloatingImageProps {
  imgStyle?: React.CSSProperties;
  src: string;
  href?: string;
  isMobile: boolean;
}

export const FloatingImage = ({
  src,
  imgStyle,
  isMobile,
}: FloatingImageProps) => {
  const [imageSpring, imageApi] = useSpring(() => ({
    config: { precision: 0.0001 },
  }));

  const hoverSpring = useSpring({
    from: { y: 0 },
    to: [{ y: -5 }, { y: 0 }],
    config: { tension: 60, friction: 7, mass: 0.2 },
    loop: true,
    delay: RanMs(),
  });

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
        x: viewFlag ? 0 : isMobile ? -10 : -100,
        opacity: viewFlag ? 0 : 1,
      },
      to: {
        x: viewFlag ? (isMobile ? -10 : -100) : 0,
        opacity: viewFlag ? 1 : 0,
      },
    });
  };

  return (
    <animated.div style={{ ...imageSpring }}>
      <animated.img
        style={{
          borderRadius: 6,
          width: isMobile ? "4.5rem" : "10rem",
          height: "auto",
          ...imgStyle,
          ...hoverSpring,
        }}
        src={src}
        ref={imgref}
      />
    </animated.div>
  );
};
