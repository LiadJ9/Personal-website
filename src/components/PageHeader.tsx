import React from "react";
import { animated, useSpring } from "@react-spring/web";
import { Colors } from "../styles/Colors";

interface NameProps {
  name: string;
}

export const PageHeader = ({ name }: NameProps) => {
  const headerSpring = useSpring({
    from: { y: -50 },
    to: { y: 0 },
  });
  return (
    <animated.p
      style={{
        fontFamily: "Poppins",
        fontSize: 40,
        color: Colors.Cream,
        ...headerSpring,
      }}
    >
      {name}
    </animated.p>
  );
};
