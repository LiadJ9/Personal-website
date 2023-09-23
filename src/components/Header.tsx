import React, { useEffect, useState } from "react";
import { Linker, RotatingImage } from "../components";
import { UilBars } from "@iconscout/react-unicons";
import { DropdownLinkStyle, HeaderStyle } from "../styles/Styles";
import { Colors } from "../styles/Colors";
import { useComponentVisible } from "../helpers/helpers";
import { animated, useSpring } from "@react-spring/web";

interface HeaderProps {
  isMobile: boolean;
}

export const Header = ({ isMobile }: HeaderProps) => {
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
    <div
      style={{
        justifyContent: isMobile ? "space-between" : "",
        ...HeaderStyle,
      }}
    >
      <div
        style={{
          flex: 0.1,
          display: "flex",
          flexDirection: "row",
        }}
      >
        {!isMobile && (
          <RotatingImage
            style={{ marginLeft: "5%", marginTop: "3%" }}
            width={55}
            height={55}
            img={require("../images/doggie.ico")}
          />
        )}
        {isMobile ? (
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
                style={{ marginTop: "10px" }}
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
                <Linker
                  style={DropdownLinkStyle}
                  extraStyle={{ color: Colors.VoguePurple }}
                  to="/"
                >
                  Home
                </Linker>
                <Linker
                  style={DropdownLinkStyle}
                  extraStyle={{ color: Colors.VoguePurple }}
                  to="/About"
                >
                  About
                </Linker>
                <Linker
                  style={DropdownLinkStyle}
                  extraStyle={{ color: Colors.VoguePurple }}
                  to="/Blog"
                >
                  Blog
                </Linker>
                <Linker
                  style={DropdownLinkStyle}
                  extraStyle={{ color: Colors.VoguePurple }}
                  to="/Portfolio"
                >
                  Portfolio
                </Linker>
              </animated.div>
            </div>
          </>
        ) : (
          <>
            <Linker
              style={{ margin: "10%" }}
              extraStyle={{ color: Colors.Cream }}
              to="/"
            >
              Home
            </Linker>
            <Linker
              style={{
                margin: "10%",
              }}
              extraStyle={{ color: Colors.Cream }}
              to="/About"
            >
              About
            </Linker>
            <Linker
              style={{ margin: "10%" }}
              extraStyle={{ color: Colors.Cream }}
              to="/Blog"
            >
              Blog
            </Linker>
            <Linker
              style={{ margin: "10%" }}
              extraStyle={{ color: Colors.Cream }}
              to="/Portfolio"
            >
              Portfolio
            </Linker>
          </>
        )}
      </div>

      {isMobile && (
        <div style={{ marginRight: "3%" }}>
          <RotatingImage
            style={{}}
            width={55}
            height={55}
            img={require("../images/doggie.ico")}
          />
        </div>
      )}
    </div>
  );
};
