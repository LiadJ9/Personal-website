import React from "react";
import { Colors } from "../../styles/Colors";
import { FloatingImage } from "../index";
import { segmentType } from "../../consts/types";

interface AboutSegmentProps {
  isMobile: boolean;
  Segment1: segmentType;
  Segment2?: segmentType;
  Segment3?: segmentType;
  textStyle?: React.CSSProperties;
}

export const AboutSegment = ({
  Segment1,
  Segment2,
  Segment3,
  isMobile,
  textStyle,
}: AboutSegmentProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "space-between",
        marginBottom: "3rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: Colors.Cream,
          fontSize: "xx-large",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: isMobile ? "95%" : "50%",
        }}
      >
        <p style={{ textAlign: isMobile ? "center" : "left" }}>
          {Segment1.header}
        </p>
        <p style={textStyle}>{Segment1.text}</p>
        {Segment2?.text && <p style={textStyle}>{Segment2.text}</p>}
        {Segment3?.text && <p style={textStyle}>{Segment3.text}</p>}
      </div>
      <div
        style={{ marginRight: isMobile ? "0rem" : "20rem" }} /* spacer div */
      ></div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {Segment1?.img && (
          <FloatingImage
            imgStyle={Segment1.imgstyle}
            src={Segment1.img}
            isMobile={isMobile}
          />
        )}
        {Segment2?.img && (
          <FloatingImage
            imgStyle={Segment2.imgstyle}
            src={Segment2.img}
            isMobile={isMobile}
          />
        )}
        {Segment3?.img && (
          <FloatingImage
            imgStyle={Segment3.imgstyle}
            src={Segment3.img}
            isMobile={isMobile}
          />
        )}
      </div>
    </div>
  );
};
