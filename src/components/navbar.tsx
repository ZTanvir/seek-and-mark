"use client";
import { useState } from "react";
import Logo from "./logo";
import NavLink from "./navLink";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <nav className="sticky top-0 w-full bg-purple-900 md:bg-transparent">
      <div className="flex gap-6 flex-col md:flex-row text-white ">
        <div className="flex justify-between md:mr-auto pt-2">
          <Logo />
          <HamburgerMenuIcon
            onClick={() => setToggleNavbar((toggle) => !toggle)}
            color="white"
            width={32}
            height={32}
            className="cursor-pointer transition-color duration-200 opacity-70 hover:opacity-100 md:hidden"
          />
        </div>
        <div
          className={cn(
            "hidden md:flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 md:gap-6 md:items-center font-semibold ",
            toggleNavbar && "flex",
          )}
        >
          <NavLink url="/">Home</NavLink>
          <NavLink url="/play">Play</NavLink>
          <NavLink url="/#about">About</NavLink>
          <NavLink url="/login">Login</NavLink>
          <NavLink url="/signup">Sign up</NavLink>
        </div>
      </div>
    </nav>
  );
}
