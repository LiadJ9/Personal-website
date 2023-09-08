import React from "react";
import { animated, useSpring } from "@react-spring/web";
import { BlogList } from "../components/Blog/BlogList";
import { blogs } from "../consts/blogs";
import { Colors } from "../styles/Colors";

export const Blog = () => {
  const headerSpring = useSpring({
    from: { y: -80 },
    to: { y: 0 },
  });
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: Colors.BlueGray,
      }}
    >
      <animated.p
        style={{
          fontFamily: "Poppins",
          fontSize: 40,
          color: Colors.Cream,
          ...headerSpring,
        }}
      >
        Blos
      </animated.p>
      <BlogList blogs={blogs} />
    </div>
  );
};
