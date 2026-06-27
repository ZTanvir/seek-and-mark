"use client";
import Link from "next/link";

type PaginationProps = {
  totalData: number;
  dataPerPage: number;
};

export default function Pagination({
  totalData,
  dataPerPage,
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
            className="inline-block rounded-sm bg-gray-100 p-2"
            href={`?page=${page}&&limit=${dataPerPage}`}
          >
            {page}
          </Link>
        </li>
      ))}
    </ul>
  );
}
