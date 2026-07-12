import { auth } from "@/auth";
import NavItems from "./nav-items";

export default async function Navbar() {
  const session = await auth();
  console.log("session", session);
  return (
    <nav className="sticky top-0 w-full bg-purple-900 md:bg-transparent">
      <NavItems session={session} />
    </nav>
  );
}
