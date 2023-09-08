import React from "react";
import { animated, useSpring } from "@react-spring/web";
import { Colors } from "../../styles/Colors";

interface BlogItemProps {
  title: string;
  content: string;
  img: string;
  timestamp: string;
}

export const BlogItem = ({ title, content, img, timestamp }: BlogItemProps) => {
  const titleSpring = useSpring({
    from: { x: 100 },
    to: { x: 0 },
  });
  return (
    <div
      style={{
        display: "felx",
        maxWidth: "110vh",
        boxShadow: `5px 7px ${Colors.SilkBrown}`,
        borderRadius: "8px",
        marginBottom: "5vh",
        backgroundColor: Colors.SilkCaramel,
      }}
    >
      <animated.h1
        style={{ marginLeft: "2vh", fontFamily: "Poppins", ...titleSpring }}
      >
        {title}
      </animated.h1>
      <p style={{ marginLeft: "2vh" }}>{`posted on: ${timestamp}`}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxHeight: "60vh",
        }}
      >
        <img
          style={{
            maxWidth: "700px",
            marginLeft: "1vh",
            marginTop: "1vh",
            borderRadius: "10px",
          }}
          src={img}
        />
      </div>
      <p
        style={{
          maxWidth: "90%",
          marginLeft: "2vh",
          textAlign: "left",
          fontFamily: "Poppins",
        }}
      >
        {content}
      </p>
    </div>
  );
};
