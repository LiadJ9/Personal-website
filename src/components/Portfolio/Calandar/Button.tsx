import React, { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <>
    <button
      onClick={onClick}
      className={
        "flex item-center justify-center px-4 rounded text-white  bg-yellow-950 p-1 m-1  hover:opacity-90 active:bg-yellow-900  text-md "
      }
      style={{
        borderColor: "transparent",
        fontFamily: "Poppins",
      }}
    >
      {children}
    </button>
  </>
);
