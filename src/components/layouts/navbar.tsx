import { auth } from "@/auth";
import NavItems from "./nav-items";

export default async function Navbar() {
  const session = await auth();
  return (
    <nav className="sticky top-0 w-full bg-purple-900 md:bg-transparent">
      <NavItems session={session} />
    </nav>
  );
}
