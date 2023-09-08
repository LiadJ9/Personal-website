import React, { useState, useEffect } from "react";
import { UilAngleUp } from "@iconscout/react-unicons";
import { Colors } from "../styles/Colors";

interface ScrollProps {
  style?: React.CSSProperties;
}

export const ScrollToTop = ({ style }: ScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
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
      {isVisible ? (
        <button
          style={{
            backgroundColor: Colors.Cream,
            borderRadius: 5,
            borderColor: "transparent",
            marginRight: 10,
          }}
          onClick={goTop}
        >
          <UilAngleUp size={"35"} color={Colors.BlueGray} />
        </button>
      ) : (
        <div style={{ marginLeft: 57 }}></div>
      )}
    </div>
  );
};
