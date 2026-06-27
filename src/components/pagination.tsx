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
    <ul>
      {pagination.map((page, index) => (
        <li key={index}>
          <Link href={``}>{page}</Link>
        </li>
      ))}
    </ul>
  );
}
