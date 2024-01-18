import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-[100vh] flex items-center justify-center">{children}</div>
  );
};

export default Layout;
