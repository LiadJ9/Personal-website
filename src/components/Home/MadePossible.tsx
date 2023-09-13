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
          fontSize: "large",
          fontFamily: "Poppins",
          alignItems: "center",
        }}
      >
        <p style={{ marginBottom: "20vh", fontSize: "xx-large" }}>
          Made possible by:
        </p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <PopUpImage
            src={require("../../images/js-cream.png")}
            href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
          />
          <PopUpImage
            imgStyle={{ width: "17.5vh", height: "17.5vh", marginTop: "1.3vh" }}
            src={require("../../images/typescript-cream.png")}
            href={"https://www.typescriptlang.org/"}
          />
          <PopUpImage
            src={require("../../images/node-js-cream.png")}
            href="https://nodejs.org/en/about"
          />
          <PopUpImage
            src={require("../../images/react-cream.png")}
            href="https://react.dev/"
          />
          <PopUpImage
            src={require("../../images/visual-studio-cream.png")}
            href="https://code.visualstudio.com/"
          />
        </div>
        <p style={{ margin: 0 }}>Icons provided by IconScout</p>
        <p style={{ margin: 0 }}>Animations made using React-Spring</p>
        <p style={{ margin: 0 }}>
          Code Blocks Component is Provided by react-code-blocks{" "}
        </p>
      </div>
      <div />
    </div>
  );
};
