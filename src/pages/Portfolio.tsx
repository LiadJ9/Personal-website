import React from "react";
import { PageHeader } from "../components";
import { CalandarDiv } from "../components";

interface PortfolioProps {
  isMobile: boolean;
}

export const Portfolio = ({ isMobile }: PortfolioProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "85vh",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PageHeader>Portfolio</PageHeader>
      </div>
      <div
        style={{
          marginTop: "1vh",
          justifyContent: isMobile ? "center" : "start",
          display: "flex",
          flexWrap: "wrap",
          gridTemplateColumns: "auto auto auto auto",
        }}
      >
        <CalandarDiv isMobile={isMobile} />
      </div>
    </div>
  );
};
