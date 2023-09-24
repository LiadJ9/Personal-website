import React from "react";
import { PageHeader } from "../components";
import { CalandarDiv } from "../components";
import { Colors } from "../styles/Colors";

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: Colors.SilkCaramel,
            borderRadius: 7,
            maxWidth: isMobile ? "98%" : "27%",
            marginLeft: isMobile ? "0" : "1vh",
            marginTop: isMobile ? "3vh" : "",
            paddingBottom: isMobile ? "1vh" : "",
          }}
        >
          <p style={{ color: Colors.SilkBrown, fontSize: 30, marginBottom: 0 }}>
            Studio Nika
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "yellow",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "90%",
              borderRadius: 6,
            }}
          >
            <div>
              <p style={{}}>This is a site I am currently working on.</p>
            </div>
            <div
              style={{
                backgroundColor: "black",
                paddingBottom: "10%",
                borderBottomRightRadius: 6,
                borderBottomLeftRadius: 6,
              }}
            >
              {" "}
              <p style={{ color: "yellow" }}>
                intended for commercial purposes.
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
