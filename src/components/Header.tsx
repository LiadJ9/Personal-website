import React from "react";
import { Linker, RotatingImage } from "../components";
import { HeaderStyle } from "../styles/Styles";

export const Header = () => {
  return (
    <div style={HeaderStyle}>
      <div style={{ flex: 0.1, display: "flex", flexDirection: "row" }}>
        <RotatingImage
          style={{ marginLeft: "5%", marginTop: "3%" }}
          width={55}
          height={55}
          img={require("../images/doggie.ico")}
        />
        <Linker style={{ margin: "10%" }} to="/" name="Home" />
        <Linker
          style={{
            display: "flex",
            margin: "10%",
          }}
          to="/About"
          name="About"
        />
        <Linker style={{ margin: "10%" }} to="/Blog" name="Blog" />
      </div>
    </div>
  );
};
