import React from "react";
import { SectionStyle } from "../../styles/Styles";
import { Colors } from "../../styles/Colors";

export const CodeSection = () => {
  return (
    <div
      style={{
        backgroundColor: Colors.SilkCaramel,
        height: "65vh",
        justifyContent: "space-between",
        ...SectionStyle,
      }} /* Code examples showcasing my components */
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "2vh",
          marginTop: "3vh",
          color: Colors.SilkBrown,
          fontSize: "xx-large",
          fontFamily: "Poppins",
          maxWidth: "45%",
        }}
      >
        <p>baller placeholder</p>
      </div>
      <div />
    </div>
  );
};
