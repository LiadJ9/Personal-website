import React, { useState } from "react";
import { CodeBlock, hopscotch } from "react-code-blocks";
import { codeBlock } from "../../consts/codeBlocks";
import { RotatingImage } from "../index";
import { UilArrowRight } from "@iconscout/react-unicons";
import { SectionStyle } from "../../styles/Styles";
import { Colors } from "../../styles/Colors";

export const CodeSection = () => {
  const [duration, setDuration] = useState<number>(3000);
  const handleChange = (number: number) => {
    setDuration(number);
  };
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
          maxWidth: "36%",
        }}
      >
        <p style={{ marginTop: "4vh" }}>Looking for more?</p>
        <p style={{ fontSize: 24 }}>
          Here&apos;s an example of one of the components I created 👉
        </p>
        <p style={{ fontSize: 25 }}>
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
          border: "solid 3px",
          height: "80%",
          alignSelf: "center",
          borderColor: Colors.DarkerBrown,
          borderRadius: 7,
        }}
      >
        <CodeBlock text={codeBlock} language="tsx" theme={hopscotch} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "16vh",
          marginTop: "13vh",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontFamily: "Poppins",
            color: Colors.DarkerBrown,
            fontSize: 15,
          }}
        >
          Try it out! Type any number
        </p>
        <input
          style={{
            width: "30%",
            borderRadius: 5,
            backgroundColor: Colors.DarkerBrown,
            border: "none",
            outline: "none",
            caretColor: Colors.SilkCaramel,
            color: Colors.SilkCaramel,
          }}
          maxLength={5}
          onChange={(num) => {
            handleChange(Number(num.target.value));
          }}
        />
        <UilArrowRight color={Colors.DarkerBrown} size={150} />
      </div>
      <div
        style={{
          display: "flex",
          height: "80%",
          alignSelf: "center",
          backgroundColor: Colors.DarkerBrown,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 7,
        }}
      >
        <RotatingImage
          img={require("../../images/star_cream.png")}
          width={"300vh"}
          height={"300vh"}
          duration={duration}
        />
      </div>
      <div /*spacer div */ />
    </div>
  );
};
