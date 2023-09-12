import React from "react";
import { SectionStyle } from "../../styles/Styles";
import { Colors } from "../../styles/Colors";
import { PopUpImage } from "../PopUpImage";

export const MadePossible = () => {
  return (
    <div
      style={{
        backgroundColor: Colors.SilkBrown,
        height: "65vh",
        justifyContent: "center",
        ...SectionStyle,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: Colors.SilkCaramel,
          fontSize: "xx-large",
          fontFamily: "Poppins",
          alignItems: "center",
        }}
      >
        <p style={{ marginBottom: "20vh" }}>Made possible by:</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <PopUpImage src={require("../../images/js-cream.png")} />
          <PopUpImage
            imgStyle={{ width: "17.5vh", height: "17.5vh", marginTop: "1.3vh" }}
            src={require("../../images/typescript-cream.png")}
          />
          <PopUpImage src={require("../../images/node-js-cream.png")} />
          <PopUpImage src={require("../../images/react-cream.png")} />
          <PopUpImage src={require("../../images/visual-studio-cream.png")} />
        </div>
      </div>
      <div />
    </div>
  );
};
