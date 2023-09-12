import React from "react";
import { Dots, HiddenComponent } from "../index";
import { Colors } from "../../styles/Colors";
import { SectionStyle, SectionTextStyle } from "../../styles/Styles";

export const SelfSection = () => {
  return (
    <div
      style={{
        backgroundColor: Colors.SilkBrown,
        ...SectionStyle,
      }} /* Basic liad info + image with cool animation */
    >
      <div
        style={{
          ...SectionTextStyle,
        }}
      >
        <p style={{}}>Liad Manteka</p>
        <p>Front-end Developer | QA Engineer | Just for fun</p>
        <p style={{ fontSize: "x-large", lineHeight: "1.6" }}>
          Hi there 👋 I&apos;m Liad, I specialize in Creating React and React
          Native websites and QA automation, Looking forward to working on new
          projects and ideas.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Dots
          dotStyle1={{ marginTop: "2vh", marginLeft: "5vh", width: "18vh" }}
          dotStyle2={{ marginTop: "5vh", width: "23vh", marginLeft: "10vh" }}
          dotStyle3={{ marginTop: "9vh", marginLeft: "6vh" }}
        />
        <Dots
          style={{ marginTop: "8vh" }}
          dotStyle1={{ marginTop: "5vh" }}
          dotStyle2={{ marginTop: "9vh", marginLeft: "7vh", width: "10vh" }}
          dotStyle3={{ marginTop: "13vh", marginLeft: "12vh", width: "12vh" }}
        />
        <Dots
          style={{ marginTop: "14vh" }}
          dotStyle1={{ marginLeft: "17vh", width: "20vh" }}
          dotStyle2={{ width: "25vh", marginLeft: "5vh", marginTop: "5vh" }}
          dotStyle3={{ width: "10vh", marginLeft: "10vh", marginTop: "8vh" }}
        />
        <Dots
          style={{ marginTop: "10vh" }}
          dotStyle1={{ width: "8vh", marginLeft: "5vh" }}
          dotStyle2={{ width: "6vh", marginLeft: "9vh", marginTop: "6vh" }}
          dotStyle3={{ width: "4vh", marginLeft: "13vh", marginTop: "9vh" }}
        />
        <Dots
          style={{ marginTop: "10vh" }}
          dotStyle1={{ width: "2vh", marginLeft: "15vh" }}
          dotStyle2={{ width: "1vh", marginLeft: "17vh", marginTop: "4vh" }}
          dotStyle3={{ width: "0vh", marginLeft: "13vh", marginTop: "9vh" }}
        />
      </div>
      <div style={{ marginLeft: "20vh" }}>
        <HiddenComponent
          style={{ borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }}
        >
          <img
            style={{
              display: "flex",
              maxWidth: "80%",
              maxHeight: "60vh",
              height: "auto",
              borderRadius: 6,
            }}
            src={require("../../images/Liad_showcase2.jpg")}
          />
        </HiddenComponent>
      </div>
    </div>
  );
};
