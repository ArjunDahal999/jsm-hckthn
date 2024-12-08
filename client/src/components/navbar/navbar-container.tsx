import React from "react";
import { ThemeModeToggle } from "./theme-toggle";
import Link from "next/link";
import Image from "next/image";
import { LogoDark, LogoWhite } from "../../../public/images";
const NavbarContainer = () => {
  return (
    <nav className=" fixed w-full h-20 z-[999]  flex  bg-background/90 items-center justify-between lg:px-12 max-md:px-3 py-6 ">
      <Link href={"/"}>
        <Image
          src={LogoWhite}
          alt="Light Mode Image"
          className=" w-[150px]  object-cover dark:hidden"
        />
        <Image
          src={LogoDark}
          alt="Light Mode Image"
          className=" w-[150px]   object-cover hidden dark:block"
        />
      </Link>
      <div className=" flex items-center gap-x-4">
        {/* <UserProfileBox data={session?.user} /> */}
        <ThemeModeToggle />
      </div>
    </nav>
  );
};

export default NavbarContainer;
