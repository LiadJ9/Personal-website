import React from "react";
import { Dots, HiddenComponent } from "../index";
import { mobileRanRem, ranRem } from "../../helpers/helpers";
import { Colors } from "../../styles/Colors";
import {
  MobileRowsStyle,
  MobileSectionStyle,
  SelfMobileTextStyle,
  SectionStyle,
  SelfSectionTextStyle,
} from "../../styles/Styles";

interface SelfSectionProps {
  isMobile: boolean;
}

export const SelfSection = ({ isMobile }: SelfSectionProps) => {
  return (
    <div
      style={{
        backgroundColor: Colors.SilkBrown,
        justifyContent: isMobile ? "center" : "space-between",
        flexDirection: "row",
        ...(isMobile ? MobileSectionStyle : SectionStyle),
      }} /* Basic liad info + image with cool animation */
    >
      <div
        style={{
          ...(isMobile ? SelfMobileTextStyle : SelfSectionTextStyle),
        }}
      >
        <p style={{}}>Liad Manteka</p>
        <p>Front-end Developer | QA Engineer | Just for fun</p>
        <p style={{ fontSize: "x-large", lineHeight: "1.6" }}>
          Hi there 👋 I&apos;m Liad, I specialize in Creating React and React
          Native websites and QA automation, Self taught, And Looking forward to
          working on new projects and ideas.
        </p>
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", ...MobileRowsStyle }}
      >
        {Array.from({ length: isMobile ? 4 : 11 }, (_, index) => (
          <Dots
            isMobile={isMobile}
            key={index}
            dotStyle1={{
              marginLeft: isMobile ? mobileRanRem(true) : ranRem(true),
              width: isMobile ? mobileRanRem() : ranRem(),
            }}
            dotStyle2={{
              marginLeft: isMobile ? mobileRanRem(true) : ranRem(true),
              width: isMobile ? mobileRanRem() : ranRem(),
            }}
            dotStyle3={{
              marginLeft: isMobile ? mobileRanRem(true) : ranRem(true),
              width: isMobile ? mobileRanRem() : ranRem(),
            }}
          />
        ))}
        <Dots
          style={{
            marginBottom: isMobile ? "3.8rem" : "3rem",
            marginRight: isMobile ? "6rem" : "0rem",
          }}
          isMobile={isMobile}
          dotStyle1={{
            marginLeft: isMobile ? "8rem" : "10rem",
            width: isMobile ? "6rem" : "4rem",
            marginTop: "2rem",
            height: "1.1rem",
          }}
          dotStyle2={{
            marginLeft: "11.5rem",
            width: "2rem",
            marginTop: "4rem",
            height: "1.0rem",
          }}
          dotStyle3={{
            marginLeft: "13rem",
            width: "1rem",
            marginTop: "5.6rem",
            height: "0.9rem",
          }}
        />
      </div>
      <div style={{ marginLeft: isMobile ? "0rem" : "14rem" }}>
        <HiddenComponent
          style={
            isMobile
              ? { borderRadius: 6, height: "98%" }
              : { borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }
          }
          isMobile={isMobile}
        >
          <img
            style={{
              display: "flex",
              maxWidth: isMobile ? "30rem" : "40rem",
              maxHeight: isMobile ? "30rem" : "40rem",
              height: "auto",
              borderRadius: isMobile ? 14 : 6,
              paddingBottom: isMobile ? 10 : 0,
            }}
            src={require("../../images/Liad_showcase2.jpg")}
          />
        </HiddenComponent>
      </div>
    </div>
  );
};
