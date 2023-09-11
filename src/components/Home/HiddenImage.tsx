import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "@react-spring/web";
import { Colors } from "../../styles/Colors";

export const HiddenImage = () => {
  const [hiderSpring, hiderApi] = useSpring(() => ({
    config: { precision: 0.0001 },
  }));

  const [block1, inView] = useInView({ threshold: 0.9 });

  useEffect(() => {
    if (inView) {
      handleDisappear();
    } else {
      handleDisappear();
    }
  });

  const handleDisappear = () => {
    hiderApi.start({
      from: {
        x: inView ? 0 : -100,
        opacity: inView ? 1 : 0,
      },
      to: {
        x: inView ? -100 : 0,
        opacity: inView ? 0 : 1,
      },
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <animated.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: Colors.SilkCaramel,
          ...hiderSpring,
        }}
        ref={block1}
      />
      <img
        style={{
          maxWidth: "100%",
          maxHeight: "60vh",
          height: "auto",
        }}
        src={require("../../images/The_bear.jpg")}
      />
    </div>
  );
};
