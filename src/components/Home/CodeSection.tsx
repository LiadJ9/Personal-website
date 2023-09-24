import React, { useState } from "react";
import { CodeBlock, hopscotch } from "react-code-blocks";
import { codeBlock } from "../../consts/codeBlocks";
import { UilArrowRight } from "@iconscout/react-unicons";
import { RotatingImage } from "../index";
import { MobileSectionStyle, SectionStyle } from "../../styles/Styles";
import { Colors } from "../../styles/Colors";

interface CodeProps {
  isMobile: boolean;
}

export const CodeSection = ({ isMobile }: CodeProps) => {
  const [duration, setDuration] = useState<number>(3000);
  const handleChange = (number: number) => {
    number = number * 1000;
    setDuration(number);
  };
  return (
    <div
      style={{
        paddingTop: isMobile ? "0" : "2vh",
        backgroundColor: Colors.SilkCaramel,
        height: isMobile ? "" : "65vh",
        justifyContent: "space-between",
        ...(isMobile ? MobileSectionStyle : SectionStyle),
      }} /* Code examples showcasing my components */
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "2vh",
          marginTop: isMobile ? "3vh" : "",
          color: Colors.SilkBrown,
          fontSize: "xx-large",
          maxWidth: isMobile ? "80%" : "36%",
        }}
      >
        <p style={{ marginTop: isMobile ? "4vh" : "0" }}>Looking for more?</p>
        <p style={{ fontSize: 24, textAlign: isMobile ? "center" : "left" }}>
          Here&apos;s an example of one of the components I created.
        </p>
        <p
          style={{
            fontSize: isMobile ? 20 : 25,
            textAlign: isMobile ? "center" : "left",
            paddingRight: "2px",
            maxWidth: isMobile ? "100%" : "80%",
          }}
        >
          Additionally, the source code for this website and instructions on how
          to set it up are on my{" "}
          <a
            style={{ color: Colors.DarkerBrown }}
            href="https://github.com/LiadJ9/Personal-website"
          >
            Github
          </a>
          , feel free to customize and use it for your own purposes.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          height: "90%",
          alignSelf: "center",
          justifyContent: "center",
          width: isMobile ? "90%" : "",
        }}
      >
        <CodeBlock
          customStyle={{
            border: "solid 3px",
            borderColor: Colors.DarkerBrown,
            borderRadius: 7,
          }}
          text={codeBlock}
          language="tsx"
          theme={hopscotch}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: isMobile ? "20rem" : "17vh",
          marginTop: isMobile ? "2rem" : "13vh",
        }}
      >
        <p
          style={{
            textAlign: "center",
            color: Colors.DarkerBrown,
            fontSize: 16,
          }}
        >
          Try it out! Type any number. Tell the component how many seconds each
          spin should take.
        </p>
        <input
          style={{
            width: "2rem",
            height: "2rem",
            textAlign: "center",
            borderRadius: 5,
            backgroundColor: Colors.DarkerBrown,
            border: "none",
            outline: "none",
            caretColor: Colors.SilkCaramel,
            color: Colors.SilkCaramel,
          }}
          maxLength={2}
          onChange={(num) => {
            handleChange(Number(num.target.value));
          }}
        />
        <UilArrowRight
          style={{ transform: isMobile ? "rotate(90deg)" : "" }}
          color={Colors.DarkerBrown}
          size={150}
        />
      </div>
      <div
        style={{
          display: "flex",
          height: isMobile ? "80%" : "90%",
          alignSelf: "center",
          backgroundColor: Colors.DarkerBrown,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 7,
          marginBottom: isMobile ? "2rem" : "",
        }}
      >
        <RotatingImage
          img={require("../../images/star_cream.png")}
          width={isMobile ? "150vh" : "300vh"}
          height={isMobile ? "150vh" : "300vh"}
          duration={duration}
        />
      </div>
      <div style={{ marginLeft: "5rem" }} /*spacer div */ />
    </div>
  );
};
