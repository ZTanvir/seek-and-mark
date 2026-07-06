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
  const isActive = pathname.endsWith(url);
  return (
    <Link
      className={cn(
        className,
        "py-2 transition-colors duration-200 hover:bg-purple-200 hover:text-purple-500 md:hover:bg-transparent",
        isActive ? "text-purple-500" : "text-white",
      )}
      href={url}
    >
      {children}
    </Link>
  );
}
