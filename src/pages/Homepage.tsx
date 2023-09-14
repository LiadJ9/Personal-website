import React from "react";
import { PageStyle } from "../styles/Styles";
import {
  AboutSection,
  CodeSection,
  MadePossible,
  SelfSection,
} from "../components";

interface HomepageProps {
  isMobile: boolean;
}

export const Homepage = ({ isMobile }: HomepageProps) => {
  return (
    <div style={PageStyle}>
      <SelfSection isMobile={isMobile} />
      <AboutSection isMobile={isMobile} />
      <CodeSection isMobile={isMobile} />
      <MadePossible isMobile={isMobile} />
    </div>
  );
};
