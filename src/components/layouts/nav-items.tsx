"use client";

import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Logo from "../logo";
import NavLink from "./navLink";
import { Session } from "next-auth";
type NavItemsProps = {
  session: Session | null;
};

export default function NavItems({ session }: NavItemsProps) {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <div className="flex justify-between px-1 pt-2 md:mr-auto">
        <Logo />
        <HamburgerMenuIcon
          onClick={() => setToggleNavbar((toggle) => !toggle)}
          color="white"
          width={32}
          height={32}
          className="transition-color cursor-pointer opacity-70 duration-200 hover:opacity-100 md:hidden"
        />
      </div>
      <div
        className={cn(
          "hidden flex-col gap-y-2 px-1 font-semibold md:flex md:flex-row md:items-center md:gap-x-8 md:gap-y-0",
          toggleNavbar && "flex",
        )}
      >
        <NavLink url="/">Home</NavLink>
        <NavLink url="/maps">Maps</NavLink>
        {session?.user ? (
          <div>
            <span className="inline-block py-2 text-white">
              {session.user.name}
            </span>
            <button
              onClick={() => signOut()}
              className="text-white transition-colors duration-200 hover:cursor-pointer hover:bg-purple-200 hover:text-purple-500 md:rounded-lg md:bg-purple-500 md:px-2 md:py-1"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <NavLink url="/signin">Login</NavLink>
            <NavLink url="/signup">Sign up</NavLink>
          </>
        )}
      </div>
    </div>
  );
}
