import React from "react";
import clsx from "clsx";

interface CellProps extends React.PropsWithChildren {
  isCurrentDate?: boolean;
  className?: string;
  onClick?: () => void;
}

const Cell = ({ children, className, onClick, isCurrentDate }: CellProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "h-12  flex items-center justify-center rounded-2xl  m-1", //border-b border-r border-black
        {
          "cursor-pointer hover:bg-gray-100 active:bg-gray-200 ": !!(
            !isCurrentDate && onClick
          ),
        },
        { "text-white  bg-yellow-950 ": isCurrentDate },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Cell;
