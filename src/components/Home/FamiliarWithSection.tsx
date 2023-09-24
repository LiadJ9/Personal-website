import React from "react";
import { IconSpan } from "./homeComponents/Iconspan";
import { MobileSectionStyle } from "../../styles/Styles";
import { Colors } from "../../styles/Colors";

interface FamiliarSectionProps {
  isMobile: boolean;
}

export const FamiliarSection = ({ isMobile }: FamiliarSectionProps) => {
  return (
    <div
      style={{
        backgroundColor: Colors.SilkBrown,
        color: Colors.SilkCaramel,
        fontSize: "xx-large",
        ...MobileSectionStyle,
      }}
    >
      <p>Experienced With:</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <IconSpan size={isMobile ? "6vh" : "12vh"} color={Colors.SilkCaramel} />
      </div>
    </div>
  );
};
