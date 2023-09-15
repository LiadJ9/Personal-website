import React from "react";
import { blogType } from "../../consts/types";
import { BlogItem } from "./BlogItem";

interface BlogProps {
  blogs: blogType[];
  style?: React.CSSProperties;
  isMobile: boolean;
}

export const BlogList = ({ blogs, style, isMobile }: BlogProps) => (
  <div style={style}>
    {Object.keys(blogs).map((blog, index) => (
      <>
        <div>
          <BlogItem
            title={blogs[index].title}
            content={blogs[index].content}
            content2={blogs[index].content2}
            content3={blogs[index].content3}
            content4={blogs[index].content4}
            content5={blogs[index].content5}
            img={blogs[index].img}
            timestamp={blogs[index].timestamp}
            isMobile={isMobile}
          />
        </div>
      </>
    ))}
  </div>
);
