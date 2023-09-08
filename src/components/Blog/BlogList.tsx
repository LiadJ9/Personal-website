import React from "react";
import { blogType } from "../../consts/types";
import { BlogItem } from "./BlogItem";

interface BlogProps {
  blogs: blogType[];
  style?: React.CSSProperties;
}

export const BlogList = ({ blogs, style }: BlogProps) => {
  return (
    <div style={style}>
      {Object.keys(blogs).map((blog, index) => (
        <>
          <div>
            <BlogItem
              title={blogs[index].title}
              content={blogs[index].content}
              img={blogs[index].img}
              timestamp={blogs[index].timestamp}
            />
          </div>
        </>
      ))}
    </div>
  );
};
