import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { UilAngleUp } from "@iconscout/react-unicons";
import { Colors } from "../styles/Colors";

interface ScrollProps {
  style?: React.CSSProperties;
}

export const ScrollToTop = ({ style }: ScrollProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrollButton, scrollapi] = useSpring(() => ({
    from: { opacity: 0 },
  }));

  const handleAppear = () => {
    scrollapi.start({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    });
  };

  const handleDisappear = () => {
    scrollapi.start({
      from: {
        opacity: 1,
      },
      to: {
        opacity: 0,
      },
    });
  };

  useEffect(() => {
    if (isVisible) {
      handleAppear();
    } else {
      handleDisappear();
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 140) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={style}>
      <animated.button
        style={{
          backgroundColor: Colors.Cream,
          borderRadius: 5,
          marginRight: 10,
          borderColor: Colors.Cream,
          ...scrollButton,
        }}
        onClick={goTop}
      >
        <UilAngleUp size={"35"} color={Colors.BlueGray} />
      </animated.button>
    </div>
  );
};
