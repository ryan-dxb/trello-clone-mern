import React, { Suspense } from "react";
import { NextPage } from "next";
import { Info } from "./_components/info";
import { Separator } from "@/components/ui/separator";
import { BoardList } from "./_components/board-list";

interface OrganizationIdPageProps {
  // Add your prop types here
}

const OrganizationIdPage: NextPage<OrganizationIdPageProps> = () => {
  const isPro = false;

  return (
    <div className="w-full mb-20">
      <Info isPro={isPro} />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationIdPage;
