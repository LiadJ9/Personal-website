import React from "react";
import { MobileSectionStyle, SectionStyle } from "../../styles/Styles";
import { Colors } from "../../styles/Colors";
import { PopUpImage } from "../PopUpImage";

interface MadeProps {
  isMobile: boolean;
}

export const MadePossible = ({ isMobile }: MadeProps) => {
  return (
    <div
      style={{
        backgroundColor: Colors.SilkBrown,
        height: "65vh",
        justifyContent: "center",
        ...(isMobile ? MobileSectionStyle : SectionStyle),
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <PopUpImage
            isMobile={isMobile}
            src={require("../../images/js-cream.png")}
            href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
          />
          <PopUpImage
            isMobile={isMobile}
            imgStyle={{
              width: isMobile ? "3.9rem" : "8.75rem",
              height: isMobile ? "3.9rem" : "8.75rem",
              marginTop: isMobile ? "0.3rem" : "0.65rem",
            }}
            src={require("../../images/typescript-cream.png")}
            href={"https://www.typescriptlang.org/"}
          />
          <PopUpImage
            isMobile={isMobile}
            src={require("../../images/node-js-cream.png")}
            href="https://nodejs.org/en/about"
          />
          <PopUpImage
            isMobile={isMobile}
            src={require("../../images/react-cream.png")}
            href="https://react.dev/"
          />
          <PopUpImage
            isMobile={isMobile}
            src={require("../../images/visual-studio-cream.png")}
            href="https://code.visualstudio.com/"
          />
        </div>
        {isMobile ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            <p style={{ margin: 0 }}>Icons provided by IconScout</p>
            <p style={{ margin: 0 }}>Animations made using React-Spring</p>
            <p style={{ margin: 0 }}>
              Code Blocks Component is Provided by react-code-blocks{" "}
            </p>
          </div>
        ) : (
          <>
            {" "}
            <p style={{ margin: 0 }}>Icons provided by IconScout</p>
            <p style={{ margin: 0 }}>Animations made using React-Spring</p>
            <p style={{ margin: 0 }}>
              Code Blocks Component is Provided by react-code-blocks{" "}
            </p>
          </>
        )}
      </div>
      <div />
    </div>
  );
};
