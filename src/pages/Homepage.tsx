import React from "react";
import { PageStyle } from "../styles/Styles";
import {
  AboutSection,
  CodeSection,
  MadePossible,
  SelfSection,
} from "../components";

export const Homepage = () => {
  return (
    <div style={PageStyle}>
      <SelfSection />
      <AboutSection />
      <CodeSection />
      <MadePossible />
    </div>
  );
};
