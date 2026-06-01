"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
};

export default function NavLink({ children, className, url }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(url);
  // console.log("is active", url, pathname, isActive);
  return (
    <Link
      className={cn(
        className,
        "hover:text-purple-500 hover:bg-purple-200 py-2 md:hover:bg-transparent transition-colors duration-200",
        isActive ? "text-purple-500" : "text-white",
      )}
      href={url}
    >
      {children}
    </Link>
  );
}
