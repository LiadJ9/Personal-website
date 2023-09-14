import React from "react";
import { PageStyle } from "../styles/Styles";
import {
  AboutSection,
  CodeSection,
  MadePossible,
  SelfSection,
} from "../components";

interface HomepageProps {
  isMobileHook: boolean;
}

export const Homepage = ({ isMobileHook }: HomepageProps) => {
  return (
    <div style={PageStyle}>
      <SelfSection isMobile={isMobileHook} />
      <AboutSection />
      <CodeSection />
      <MadePossible />
    </div>
  );
};
