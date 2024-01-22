import React, { FC } from "react";

interface ListWrapperProps {
  // Add your prop types here
  children: React.ReactNode;
}

const ListWrapper: FC<ListWrapperProps> = ({ children }) => {
  return <li className="shrink-0 h-full w-[272px] select-none">{children}</li>;
};

export default ListWrapper;
