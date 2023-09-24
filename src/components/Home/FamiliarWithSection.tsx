import React from "react";
import { MobileSectionStyle, SectionStyle } from "../../styles/Styles";
import { Colors } from "../../styles/Colors";

interface FamiliarSectionProps {
  isMobile: boolean;
}

export const FamiliarSection = ({ isMobile }: FamiliarSectionProps) => {
  return (
    <div
      style={{
        color: Colors.DarkerBrown,
        ...(isMobile ? MobileSectionStyle : SectionStyle),
      }}
    >
      <p>sex div</p>
    </div>
  );
};
