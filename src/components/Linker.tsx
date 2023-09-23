import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { LinkStyle, HoveredLink } from "../styles/Styles";

interface LinkerProps {
  style?: React.CSSProperties;
  extraStyle?: React.CSSProperties;
  to: string;
  children: ReactNode;
}

export const Linker = ({ to, children, style, extraStyle }: LinkerProps) => {
  const [IsHovered, setIsHovered] = useState<boolean>(false);
  const HandleMouseEnter = () => {
    setIsHovered(true);
  };
  const HandleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={{ textAlign: "center", ...style }}>
      <Link
        style={{ ...(IsHovered ? HoveredLink : LinkStyle), ...extraStyle }}
        onMouseEnter={HandleMouseEnter}
        onMouseLeave={HandleMouseLeave}
        to={to}
      >
        {children}
      </Link>
    </div>
  );
};
