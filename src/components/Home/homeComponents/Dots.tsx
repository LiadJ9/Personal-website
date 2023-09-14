import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SpringRef, animated, useSpring } from "@react-spring/web";
import { Colors } from "../../../styles/Colors";

interface DotsProps {
  style?: React.CSSProperties;
  dotStyle1?: React.CSSProperties;
  dotStyle2?: React.CSSProperties;
  dotStyle3?: React.CSSProperties;
  isMobile?: boolean;
}

export const Dots = ({
  style,
  dotStyle1,
  dotStyle2,
  dotStyle3,
  isMobile,
}: DotsProps) => {
  const [hiderSpring, hiderApi] = useSpring(() => ({
    config: { precision: 0.0001 },
  }));
  const [hiderSpring2, hiderApi2] = useSpring(() => ({
    config: { precision: 0.0001 },
  }));
  const [hiderSpring3, hiderApi3] = useSpring(() => ({
    config: { precision: 0.0001 },
  }));

  const [dot, inView] = useInView({ threshold: 0.9 });
  const [dot2, inView2] = useInView({ threshold: 0.9 });
  const [dot3, inView3] = useInView({ threshold: 0.9 });

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

  useEffect(() => {
    if (inView3) {
      handleDisappear(inView3, hiderApi3);
    } else {
      handleDisappear(inView3, hiderApi3);
    }
  }, [inView3]);

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
        position: isMobile ? "initial" : "relative",
        flexDirection: "column",
        marginBottom: isMobile ? "2rem" : "3rem",
        ...style,
      }}
    >
      <animated.div
        style={{
          position: isMobile ? "initial" : "absolute",
          width: "18rem",
          height: dotStyle1?.height ? dotStyle1.height : "0.6rem",
          backgroundColor: Colors.SilkCaramel,
          borderRadius: 300,
          marginTop: "1.5rem",
          ...hiderSpring,
          ...dotStyle1,
        }}
        ref={dot}
      />
      <animated.div
        style={{
          position: "absolute",
          width: "18rem",
          height: "0.6rem",
          backgroundColor: Colors.SilkCaramel,
          borderRadius: 300,
          marginTop: "2.5rem",
          ...hiderSpring2,
          ...dotStyle2,
        }}
        ref={dot2}
      />
      <animated.div
        style={{
          position: "absolute",
          width: dotStyle3?.width ? dotStyle3.width : "18rem",
          height: "0.6rem",
          backgroundColor: Colors.SilkCaramel,
          borderRadius: 300,
          marginTop: "3.5rem",
          ...hiderSpring3,
          ...dotStyle3,
        }}
        ref={dot3}
      />
    </div>
  );
};
