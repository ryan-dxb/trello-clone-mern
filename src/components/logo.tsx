import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

interface LogoProps {
  // Add your prop types here
}

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const Logo: FC<LogoProps> = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/logo.svg" alt="Logo" height={30} width={30} />
        <p
          className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}
        >
          Taskify
        </p>
      </div>
    </Link>
  );
};

export default Logo;
