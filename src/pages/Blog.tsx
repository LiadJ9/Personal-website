import React from "react";
import { BlogList } from "../components/Blog/BlogList";
import { blogs } from "../consts/blogs";
import { PageHeader } from "../components";
import { PageStyle } from "../styles/Styles";

export const Blog = () => (
  <div style={PageStyle}>
    <PageHeader>Blogs</PageHeader>
    <BlogList blogs={blogs} />
  </div>
);
