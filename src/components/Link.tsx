import React, { useState } from "react";
import { LinkStyle, HoveredLink } from "../styles/Styles";

interface LinkerProps {
  name: string;
  href: string;
  style?: React.CSSProperties;
}

export const HyperLink = ({ name, href, style }: LinkerProps) => {
  const [IsHovered, setIsHovered] = useState<boolean>(false);
  const HandleMouseEnter = () => {
    setIsHovered(true);
  };
  const HandleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={style}>
      <a
        href={href}
        style={IsHovered ? HoveredLink : LinkStyle}
        onMouseEnter={HandleMouseEnter}
        onMouseLeave={HandleMouseLeave}
      >
        {name}
      </a>
    </div>
  );
};
