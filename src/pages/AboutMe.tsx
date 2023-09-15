import React from "react";
import {
  InnerBlogpostContainerStyle,
  OuterBlogpostContainerStyle,
  PageStyle,
} from "../styles/Styles";
import { PageHeader } from "../components";
const isMobile = true;

export const AboutMe = () => (
  <div style={PageStyle}>
    <PageHeader name="About" />
    <div
      style={{
        maxWidth: isMobile ? "46vh" : "110vh",
        ...OuterBlogpostContainerStyle,
      }}
    >
      <div style={InnerBlogpostContainerStyle}>
        <p></p>
      </div>
    </div>
  </div>
);
