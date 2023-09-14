import React from "react";
import { RotatingImage, Dots } from "../../index";
import { Colors } from "../../../styles/Colors";

interface SpaceProps {
  isMobile: boolean;
}

export const Space = ({ isMobile }: SpaceProps) => {
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
        width={"70rem"}
        height={"auto"}
        duration={9000}
      />
      <RotatingImage
        style={{ marginLeft: isMobile ? "18rem" : "30rem" }}
        img={require("../../../images/star.png")}
        width={"65rem"}
        height={"auto"}
        duration={5000}
      />
      <Dots
        isMobile={isMobile}
        dotStyle1={{
          backgroundColor: Colors.SilkBrown,
          marginLeft: isMobile ? "0rem" : "18rem",
          width: "5rem",
          height: "5rem",
        }}
        dotStyle2={{
          backgroundColor: Colors.SilkBrown,
          marginLeft: isMobile ? "10rem" : "60vh",
          marginTop: "10vh",
          width: "3rem",
          height: "3rem",
        }}
        dotStyle3={{
          backgroundColor: Colors.SilkBrown,
          marginLeft: isMobile ? "0rem" : "12rem",
          width: "2rem",
          height: "2rem",
          marginTop: "8rem",
        }}
      />
      <RotatingImage
        style={{ marginLeft: "35vh", marginTop: isMobile ? "7rem" : "10vh" }}
        img={require("../../../images/star.png")}
        width={"40rem"}
        height={"auto"}
        duration={6000}
      />
      <RotatingImage
        style={{
          marginLeft: isMobile ? "3rem" : "60vh",
          marginTop: isMobile ? "1rem" : "10vh",
        }}
        img={require("../../../images/star.png")}
        width={"60rem"}
        height={"auto"}
        duration={7000}
      />
      <Dots
        isMobile={isMobile}
        dotStyle1={{
          backgroundColor: Colors.SilkBrown,
          marginLeft: isMobile ? "5rem" : "45vh",
          width: "3rem",
          height: "3rem",
        }}
        dotStyle2={{
          backgroundColor: Colors.SilkBrown,
          marginLeft: isMobile ? "-2rem" : "70vh",
          width: "4.8rem",
          height: "4.8rem",
        }}
        dotStyle3={{
          backgroundColor: Colors.SilkBrown,
          marginLeft: isMobile ? "13rem" : "10vh",
          width: "2rem",
          height: "2rem",
          marginTop: "10vh",
        }}
      />
      <RotatingImage
        style={{ marginLeft: isMobile ? "11rem" : "10vh" }}
        img={require("../../../images/star.png")}
        width={"100rem"}
        height={"auto"}
      />
    </div>
  );
};
