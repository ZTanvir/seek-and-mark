"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

type PaginationProps = {
  totalData: number;
  dataPerPage: number;
  currentPage: number;
};

export default function Pagination({
  totalData,
  dataPerPage,
  currentPage,
}: PaginationProps) {
  const pagination = [];
  for (let index = 0; index < Math.ceil(totalData / dataPerPage); index++) {
    pagination[index] = index + 1;
  }
  return (
    <ul className="my-2 flex flex-wrap items-center justify-center gap-2">
      {pagination.map((page, index) => (
        <li key={index}>
          <Link
            className={cn(
              "inline-block rounded-sm bg-gray-100 px-3 py-1 transition-colors duration-300 hover:bg-gray-100/80 focus:bg-gray-100/80",
              currentPage === page && "bg-gray-100/80",
            )}
            href={`?page=${page}&&limit=${dataPerPage}`}
          >
            {page}
          </Link>
        </li>
      ))}
    </ul>
  );
}
