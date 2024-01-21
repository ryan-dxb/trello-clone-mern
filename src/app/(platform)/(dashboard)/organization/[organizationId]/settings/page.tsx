import React from "react";
import { NextPage } from "next";
import { OrganizationProfile } from "@clerk/nextjs";

interface SettingsPageProps {
  // Add your prop types here
}

const SettingsPage: NextPage<SettingsPageProps> = () => {
  return (
    <div className="w-full">
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: "none",
              width: "100%",
            },
            card: {
              border: "1px solid #e5e5e5",
              boxShadow: "none",
              width: "100%",
            },
          },
        }}
      />
    </div>
  );
};

export default SettingsPage;
