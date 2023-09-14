import React from "react";
import { MobileSectionStyle, SectionStyle } from "../../styles/Styles";
import { Colors } from "../../styles/Colors";
import { Space } from "./homeComponents/Space";
interface AboutProps {
  isMobile: boolean;
}

export const AboutSection = ({ isMobile }: AboutProps) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: Colors.SilkCaramel,
        justifyContent: isMobile ? "center" : "space-between",
        ...(isMobile ? MobileSectionStyle : SectionStyle),
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "2vh",
          marginTop: "3vh",
          color: Colors.SilkBrown,
          fontSize: isMobile ? "x-large" : "xx-large",
          fontFamily: "Poppins",
          maxWidth: isMobile ? "90%" : "45%",
        }}
      >
        <p>So what&apos;s all this?</p>
        <p
          style={{
            fontSize: isMobile ? "large" : "x-large",
            lineHeight: "1.7",
          }}
        >
          Welcome to my website, Made only in <b>one week</b>, using only{" "}
          <b>original Components</b> created by me. This is where I showcase my
          skills as a developer using <b>Javascript, Typescript, Python</b> and
          more, Including Code snippets from projects I&apos;ve done in the
          past. From time to time I also try and post my thoughts and expose
          others to new things they probably don&apos;t know about yet.
        </p>
      </div>
      <div style={{ width: "37%" }} /* Spaaacer div */ />
      <Space isMobile={isMobile} />
      <div />
    </div>
  );
};
