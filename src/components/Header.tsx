import React from "react";
import { RotatingImage, BurgerDropdown, LinkList } from "../components";
import { HeaderStyle } from "../styles/Styles";
import { Colors } from "../styles/Colors";

interface HeaderProps {
  isMobile: boolean;
}

export const Header = ({ isMobile }: HeaderProps) => {
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
          <BurgerDropdown />
        ) : (
          <LinkList Color={Colors.Cream} style={{ margin: "10%" }} />
        )}
      </div>

      {isMobile && (
        <div style={{ marginRight: "3%", marginTop: "1vh" }}>
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
