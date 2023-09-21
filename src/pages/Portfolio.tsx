import React from "react";

interface PortfolioProps {
  isMobile: boolean;
}

export const Portfolio: React.FC<PortfolioProps> = ({ isMobile }) => {
  return <div>portfolio page {isMobile}</div>;
};
