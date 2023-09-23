import React, { ReactNode } from "react";
import { animated, useSpring } from "@react-spring/web";
import { Colors } from "../styles/Colors";

interface NameProps {
  children: ReactNode;
  style?: React.CSSProperties;
}

export const PageHeader = ({ children, style }: NameProps) => {
  const headerSpring = useSpring({
    from: { y: -50 },
    to: { y: 0 },
  });
  return (
    <animated.p
      style={{
        fontSize: 40,
        color: Colors.Cream,
        ...headerSpring,
        ...style,
      }}
    >
      {children}
    </animated.p>
  );
};
