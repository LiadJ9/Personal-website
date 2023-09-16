import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "@react-spring/web";
import { Colors } from "../../styles/Colors";

interface HiddenComponentProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  isMobile: boolean;
}

export const HiddenComponent = ({
  children,
  style,
  containerStyle,
  isMobile,
}: HiddenComponentProps) => {
  const [hiderSpring, hiderApi] = useSpring(() => ({
    config: { precision: 0.0001 },
  }));

  const [block1, inView] = useInView(
    isMobile ? { threshold: 0.3 } : { threshold: 0.7 }
  );

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
        x: inView ? 0 : -50,
        opacity: inView ? 1 : 0,
      },
      to: {
        x: inView ? -50 : 0,
        opacity: inView ? 0 : 1,
      },
    });
  };

  return (
    <div style={{ position: "relative", ...containerStyle }}>
      <animated.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: Colors.DarkerBrown,
          ...hiderSpring,
          ...style,
        }}
        ref={block1}
      />
      {children}
    </div>
  );
};
