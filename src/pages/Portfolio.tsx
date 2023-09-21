import React from "react";
import { Colors } from "../styles/Colors";
import { PageHeader } from "../components";

interface PortfolioProps {
  isMobile: boolean;
}

export const Portfolio = ({ isMobile }: PortfolioProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "85vh",
      }}
    >
      <PageHeader>Portfolio</PageHeader>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gridTemplateColumns: "auto auto auto auto",
          backgroundColor: Colors.SilkCaramel,
        }}
      >
        {/* {[...Array(30)].map((_, index) => (
        <img
          style={{ margin: "1vh" }}
          key={index}
          width={"10%"}
          src={require("../images/pie.jpeg")}
        ></img>
      ))} */}
        portfolio page {isMobile}
      </div>
    </div>
  );
};
