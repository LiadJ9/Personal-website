import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LinkStyle, HoveredLink } from "../styles/Styles";

interface LinkerProps {
  style?: React.CSSProperties;
  to: string;
  name: string;
}

export const Linker = ({ to, name, style }: LinkerProps) => {
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
        style={IsHovered ? HoveredLink : LinkStyle}
        onMouseEnter={HandleMouseEnter}
        onMouseLeave={HandleMouseLeave}
        to={to}
      >
        {name}
      </Link>
    </div>
  );
};
