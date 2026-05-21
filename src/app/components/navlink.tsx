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

  return (
    <Link
      className={cn(className, isActive ? "text-purple-500" : "text-white")}
      href={url}
    >
      {children}
    </Link>
  );
}
