"use client";
import { useState } from "react";
import Logo from "../logo";
import NavLink from "./navLink";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <nav className="sticky top-0 w-full bg-purple-900 md:bg-transparent">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex justify-between pt-2 md:mr-auto">
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
            "hidden flex-col gap-y-2 font-semibold md:flex md:flex-row md:items-center md:gap-6 md:gap-x-4 md:gap-y-0",
            toggleNavbar && "flex",
          )}
        >
          <NavLink url="/">Home</NavLink>
          <NavLink url="/maps">Maps</NavLink>
          <NavLink url="/login">Login</NavLink>
          <NavLink url="/signup">Sign up</NavLink>
        </div>
      </div>
    </nav>
  );
}
