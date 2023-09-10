import React from "react";
import { UilAtom } from "@iconscout/react-unicons";
import { HyperLink, ScrollToTop } from "./index";
import { FooterStyle, InnerFooterStyle } from "../styles/Styles";
import { Colors } from "../styles/Colors";

export const Footer = () => {
  return (
    <>
      <div style={FooterStyle}>
        <p
          style={{ fontFamily: "Poppins", color: Colors.Cream, paddingLeft: 5 }}
        >
          Created by LiadJ9
        </p>
        <div style={InnerFooterStyle}>
          <UilAtom size={"35"} color={Colors.Cream} />
          <HyperLink
            style={{ marginTop: 5 }}
            href="https://react.dev/"
            name="Powered by React"
          />
        </div>
        <ScrollToTop />
      </div>
    </>
  );
};
