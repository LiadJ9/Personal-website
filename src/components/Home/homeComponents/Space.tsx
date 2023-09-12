import React from "react";
import { RotatingImage, Dots } from "../../index";
import { Colors } from "../../../styles/Colors";

export const Space = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <RotatingImage
        img={require("../../../images/star.png")}
        width={"80vh"}
        height={"auto"}
        duration={9000}
      />
      <RotatingImage
        style={{ marginLeft: "50vh" }}
        img={require("../../../images/star.png")}
        width={"70vh"}
        height={"auto"}
        duration={5000}
      />
      <Dots
        dotStyle1={{
          backgroundColor: Colors.SilkBrown,
          marginLeft: "30vh",
          width: "7vh",
          height: "7vh",
        }}
        dotStyle2={{
          backgroundColor: Colors.SilkBrown,
          marginLeft: "60vh",
          marginTop: "10vh",
          width: "5vh",
          height: "5vh",
        }}
        dotStyle3={{
          backgroundColor: Colors.SilkBrown,
          marginLeft: "20vh",
          width: "3vh",
          height: "3vh",
          marginTop: "10vh",
        }}
      />
      <RotatingImage
        style={{ marginLeft: "35vh", marginTop: "10vh" }}
        img={require("../../../images/star.png")}
        width={"35vh"}
        height={"auto"}
        duration={6000}
      />
      <RotatingImage
        style={{ marginLeft: "60vh", marginTop: "10vh" }}
        img={require("../../../images/star.png")}
        width={"60vh"}
        height={"auto"}
        duration={7000}
      />
      <Dots
        dotStyle1={{
          backgroundColor: Colors.SilkBrown,
          marginLeft: "45vh",
          width: "5vh",
          height: "5vh",
        }}
        dotStyle2={{
          backgroundColor: Colors.SilkBrown,
          marginLeft: "70vh",
          width: "7vh",
          height: "7vh",
        }}
        dotStyle3={{
          backgroundColor: Colors.SilkBrown,
          marginLeft: "10vh",
          width: "3vh",
          height: "3vh",
          marginTop: "10vh",
        }}
      />
      <RotatingImage
        style={{ marginLeft: "10vh" }}
        img={require("../../../images/star.png")}
        width={"100vh"}
        height={"auto"}
      />
      <div
        style={{
          paddingRight: "4vh",
        }} /* Scummy Cheat div so stars don't bounce  */
      />
    </div>
  );
};
