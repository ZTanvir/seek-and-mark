import Link from "next/link";
import Logo from "./logo";
export default function Navbar() {
  return (
    <nav className="flex text-white py-2">
      <div className="mr-auto">
        <Logo />
      </div>
      <div className="flex gap-6 items-center font-semibold">
        <Link href="/">Home</Link>
        <Link href="/play">Play</Link>
        <Link href="/#about">About</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">Sign up</Link>
      </div>
    </nav>
  );
}
