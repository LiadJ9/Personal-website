import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SpringRef, animated, useSpring } from "@react-spring/web";
import { Colors } from "../../styles/Colors";

interface DotsProps {
  style?: React.CSSProperties;
  secondMargin: string;
}

export const Dots = ({ style, secondMargin }: DotsProps) => {
  const [hiderSpring, hiderApi] = useSpring(() => ({
    config: { precision: 0.0001 },
  }));
  const [hiderSpring2, hiderApi2] = useSpring(() => ({
    config: { precision: 0.0001 },
  }));

  const [dot, inView] = useInView({ threshold: 0.9 });
  const [dot2, inView2] = useInView({ threshold: 0.9 });

  useEffect(() => {
    if (inView) {
      handleDisappear(inView, hiderApi);
    } else {
      handleDisappear(inView, hiderApi);
    }
  }, [inView]);

  useEffect(() => {
    if (inView2) {
      handleDisappear(inView2, hiderApi2);
    } else {
      handleDisappear(inView2, hiderApi2);
    }
  }, [inView2]);

  const handleDisappear = (viewFlag: boolean, api: SpringRef<object>) => {
    api.start({
      from: {
        x: viewFlag ? 0 : -100,
        opacity: viewFlag ? 0 : 1,
      },
      to: {
        x: viewFlag ? -100 : 0,
        opacity: viewFlag ? 1 : 0,
      },
    });
  };

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        ...style,
      }}
    >
      <animated.div
        style={{
          position: "absolute",
          width: "20vh",
          height: "1vh",
          backgroundColor: Colors.SilkCaramel,
          borderRadius: 300,
          ...hiderSpring,
        }}
        ref={dot}
      />
      <animated.div
        style={{
          position: "absolute",
          width: "30vh",
          height: "1vh",
          backgroundColor: Colors.SilkCaramel,
          borderRadius: 300,
          marginTop: secondMargin,
          ...hiderSpring2,
        }}
        ref={dot2}
      />
    </div>
  );
};
