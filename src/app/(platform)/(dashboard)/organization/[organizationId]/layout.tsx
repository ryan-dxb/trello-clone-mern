import React, { FC } from "react";
import { auth } from "@clerk/nextjs";
import { startCase } from "lodash";
import { OrgControl } from "./_components/org-control";

interface LayoutProps {
  children: React.ReactNode;
}

export async function generateMetadata() {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || "organization"),
  };
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default Layout;
