import React from "react";
import { Linker } from "../Linker";

interface LinkListProps {
  Color: string;
  style: React.CSSProperties;
}

export const LinkList = ({ style, Color }: LinkListProps) => {
  return (
    <>
      {}
      <Linker style={style} extraStyle={{ color: Color }} to="/">
        Home
      </Linker>
      <Linker style={style} extraStyle={{ color: Color }} to="/About">
        About
      </Linker>
      <Linker style={style} extraStyle={{ color: Color }} to="/Blog">
        Blog
      </Linker>
      <Linker style={style} extraStyle={{ color: Color }} to="/Portfolio">
        Portfolio
      </Linker>
    </>
  );
};
