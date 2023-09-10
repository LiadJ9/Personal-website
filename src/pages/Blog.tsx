import React from "react";
import { BlogList } from "../components/Blog/BlogList";
import { blogs } from "../consts/blogs";
import { PageHeader } from "../components";
import { BlogPageStyle } from "../styles/Styles";

export const Blog = () => {
  return (
    <div style={BlogPageStyle}>
      <PageHeader name="Blogs" />
      <BlogList blogs={blogs} />
    </div>
  );
};
