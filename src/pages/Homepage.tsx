import React, { useContext } from "react";
import { PageStyle } from "../styles/Styles";
import {
  AboutSection,
  CodeSection,
  FamiliarSection,
  MadePossible,
  SelfSection,
} from "../components";
import { isMobileContext } from "../helpers/helpers";

export const Homepage = () => {
  const isMobile = useContext(isMobileContext);
  return (
    <div style={PageStyle}>
      <SelfSection isMobile={isMobile} />
      <AboutSection isMobile={isMobile} />
      <CodeSection isMobile={isMobile} />
      <FamiliarSection isMobile={isMobile} />
      <MadePossible isMobile={isMobile} />
    </div>
  );
};
