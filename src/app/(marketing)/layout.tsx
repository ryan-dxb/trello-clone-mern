import React, { FC } from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
