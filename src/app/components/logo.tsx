import Link from "next/link";
export default function Logo() {
  return (
    <Link className="font-bold text-xl" href="/">
      Seek And Mark{" "}
      <span className="bg-purple-500 w-2 h-2 inline-block rounded-full"></span>
    </Link>
  );
}
