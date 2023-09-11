import React from "react";
import { PageStyle } from "../styles/Styles";
import { Colors } from "../styles/Colors";
import { Dots, HiddenImage } from "../components";

export const Homepage = () => {
  return (
    <div style={PageStyle}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "start",
          width: "100%",
          backgroundColor: Colors.SilkBrown,
        }} /* Basic liad info + image with cool animation */
      >
        <div
          style={{
            marginLeft: "2vh",
            color: Colors.SilkCaramel,
            fontSize: "xx-large",
          }}
        >
          <p style={{ fontFamily: "Poppins" }}>Liad Manteka</p>
          <p style={{ fontFamily: "Poppins" }}>
            Front-end Developer | QA Engineer | Hopeful Romantic
          </p>
        </div>
        <Dots secondMargin="5vh" style={{ marginTop: "1vh" }} />
        <HiddenImage img={require("../images/The_bear.jpg")} />
      </div>
      <div
        style={{
          height: "2000px",
        }} /* About this site info (what this site is about, ect) */
      ></div>
      <div /* Code examples showcasing my components */></div>
      <div /* Cool image vectors of TS/React spring/react route/ect */></div>
    </div>
  );
};

`    <div /* Basic liad info + image with cool animation */></div>
<div /* About this site info (what this site is about, ect) */></div>
<div /* Code examples showcasing my components */></div>
<div /* Cool image vectors of TS/React spring/react route/ect */></div>`;
