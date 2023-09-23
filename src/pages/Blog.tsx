import React from "react";
import { BlogList } from "../components/Blog/BlogList";
import { blogs } from "../consts/blogs";
import { PageHeader } from "../components";
import { PageStyle } from "../styles/Styles";

interface BlogProps {
  isMobile: boolean;
}

export const Blog = ({ isMobile }: BlogProps) => (
  <div style={PageStyle}>
    <PageHeader>Blogs</PageHeader>
    <BlogList blogs={blogs} isMobile={isMobile} />
  </div>
);
