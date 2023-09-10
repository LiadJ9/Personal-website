import React from "react";
import { animated, useSpring } from "@react-spring/web";
import { Linker } from "./Linker";
import { HeaderStyle } from "../styles/Styles";

export const Header = () => {
  const imageSpring = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
    loop: true,
    config: { duration: 3000 },
  });
  return (
    <div style={HeaderStyle}>
      <div style={{ flex: 0.1, display: "flex", flexDirection: "row" }}>
        <animated.img
          style={{ marginLeft: "5%", marginTop: "3%", ...imageSpring }}
          width={55}
          height={55}
          src={require("../images/doggie.ico")}
        />
        <Linker style={{ margin: "10%" }} to="/" name="Home" />
        <Linker style={{ margin: "10%" }} to="/Music" name="Music" />
        <Linker style={{ margin: "10%" }} to="/Blog" name="Blog" />
      </div>
    </div>
  );
};
