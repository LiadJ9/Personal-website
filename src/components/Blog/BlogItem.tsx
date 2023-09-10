import React from "react";
import { animated, useSpring } from "@react-spring/web";
import { Colors } from "../../styles/Colors";
import {
  InnerBlogpostContainerStyle,
  OuterBlogpostContainerStyle,
  ParagraphStyle,
} from "../../styles/Styles";

interface BlogItemProps {
  title: string;
  content: string;
  content2?: string;
  content3?: string;
  img?: string;
  timestamp: string;
}

export const BlogItem = ({
  title,
  content,
  content2,
  content3,
  img,
  timestamp,
}: BlogItemProps) => {
  const titleSpring = useSpring({
    from: { x: -50, opacity: 0 },
    to: { x: 0, opacity: 1 },
  });

  const [imageSpring, imageapi] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }));
  imageapi.start({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <div style={OuterBlogpostContainerStyle}>
      <div style={InnerBlogpostContainerStyle}>
        <animated.h1
          style={{
            fontFamily: "Poppins",
            color: Colors.DarkBrown,
            ...titleSpring,
          }}
        >
          {title}
        </animated.h1>
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: "300",
            color: Colors.DarkBrown,
          }}
        >{`posted on: ${timestamp}`}</p>
        {img && (
          <animated.img
            style={{
              borderRadius: "10px",
              maxWidth: "90%",
              height: "auto",
              ...imageSpring,
            }}
            src={img}
          />
        )}
        <p style={ParagraphStyle}>{content}</p>
        {content2 && <p style={ParagraphStyle}>{content2}</p>}
        {content3 && <p style={ParagraphStyle}>{content3}</p>}
      </div>
    </div>
  );
};
