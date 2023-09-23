import React from "react";
import {
  UilGithubAlt,
  UilLinkedinAlt,
  UilBriefcaseAlt,
} from "@iconscout/react-unicons";
import { ScrollToTop } from "./index";
import resume from "../documents/QA Resume Liad 923.pdf";
import { FooterStyle, InnerFooterStyle } from "../styles/Styles";
import { Colors } from "../styles/Colors";

export const Footer = () => (
  <div style={FooterStyle}>
    <p style={{  color: Colors.Cream, marginLeft: 5 }}>
      Created by LiadJ9
    </p>
    <div style={InnerFooterStyle}>
      <a href="https://github.com/LiadJ9">
        <UilGithubAlt size={"35"} color={Colors.Cream} />
      </a>
      <a
        href="https://www.linkedin.com/in/liad-manteka-28703b259/"
        style={{ marginLeft: "1vh" }}
      >
        <UilLinkedinAlt size={"35"} color={Colors.Cream} />
      </a>
      <a
        href={resume}
        target="_blank"
        rel="noreferrer"
        style={{ marginLeft: "1vh" }}
      >
        <UilBriefcaseAlt size={"35"} color={Colors.Cream} />
      </a>
    </div>
    <ScrollToTop />
  </div>
);
