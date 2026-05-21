import Logo from "./logo";
import NavLink from "./navlink";

export default function Navbar() {
  return (
    <nav className="flex text-white py-2">
      <div className="mr-auto">
        <Logo />
      </div>
      <div className="flex gap-6 items-center font-semibold">
        <NavLink url="/">Home</NavLink>
        <NavLink url="/play">Play</NavLink>
        <NavLink url="/#about">About</NavLink>
        <NavLink url="/login">Login</NavLink>
        <NavLink url="/signup">Sign up</NavLink>
      </div>
    </nav>
  );
}
