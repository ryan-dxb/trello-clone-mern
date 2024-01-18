import React from "react";
import { NextPage } from "next";
import { OrganizationList } from "@clerk/nextjs";

interface CreateOrganizationPageProps {
  // Add your prop types here
}

const CreateOrganizationPage: NextPage<CreateOrganizationPageProps> = () => {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organization/:id"
      afterCreateOrganizationUrl="/organization/:id"
    />
  );
};

export default CreateOrganizationPage;
