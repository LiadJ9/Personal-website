import React from "react";
import { SectionStyle } from "../../styles/Styles";
import { Colors } from "../../styles/Colors";
import { Space } from "./homeComponents/Space";

export const AboutSection = () => {
  return (
    <div
      style={{
        backgroundColor: Colors.SilkCaramel,
        height: "65vh",
        ...SectionStyle,
      }}
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
        <p>So what&apos;s all this?</p>
        <p style={{ fontSize: "x-large", lineHeight: "1.7" }}>
          Welcome to my website, Made only in <b>two weeks</b>, using only{" "}
          <b>original Components</b> created by me. This is where I showcase my
          skills as a developer using <b>Javascript, Typescript, Python</b> and
          more, Including Code snippets from projects I&apos;ve done in the
          past. From time to time I also try and post my thoughts and expose
          others to new things they probably don&apos;t know about yet.
        </p>
      </div>
      <div style={{ width: "37%" }} /* Spaaacer div */ />
      <Space />
      <div />
    </div>
  );
};
