import React, { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useComponentVisible } from "../../helpers/helpers";
import { DropdownLinkStyle } from "../../styles/Styles";
import { Colors } from "../../styles/Colors";
import { UilBars } from "@iconscout/react-unicons";
import { LinkList } from "./LinkList";

export const BurgerDropdown = () => {
  const [BurgerSpring, BurgerApi] = useSpring(() => ({
    opacity: 0,
    height: 0,
    config: { precision: 0.0001 },
  }));

  const HandleOpen = () => {
    if (BurgerSpring.opacity)
      BurgerApi.start({
        from: { height: 0, opacity: 0 },
        to: { height: 200, opacity: 1 },
      });
  };

  const HandleClose = () => {
    BurgerApi.start({
      from: { height: 200, opacity: 1 },
      to: [{ height: 0, opacity: 0 }],
    });
  };
  const { ref, isVisible, setIsComponentVisible } = useComponentVisible(
    false,
    300,
    HandleClose
  );

  useEffect(() => {
    if (isVisible === true) {
      HandleOpen();
    } else {
      HandleClose();
    }
  }, [isVisible]);

  return (
    <>
      <div
        style={{
          position: "relative",
          display: "inline-block",
        }}
        ref={ref}
        onClick={() => {
          if (isVisible === true) {
            HandleClose();
            setIsComponentVisible(!isVisible);
          } else {
            setIsComponentVisible(!isVisible);
          }
        }}
      >
        <UilBars
          style={{ marginTop: "1.7vh", marginLeft: "1vh" }}
          size={40}
          color={Colors.SilkCaramel}
        />
        <animated.div
          style={{
            position: "absolute",
            backgroundColor: Colors.DarkerBrown,
            borderRadius: 6,
            pointerEvents: isVisible ? "auto" : "none",
            ...BurgerSpring,
          }}
        >
          <LinkList style={DropdownLinkStyle} Color={Colors.VoguePurple} />
        </animated.div>
      </div>
    </>
  );
};
