import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-[#FFF7ED]">
      <Link
        to="/"
        className=" text-3xl md:text-4xl font-inter font-extrabold uppercase"
      >
        #VanLife
      </Link>
      <nav className="flex gap-x-4">
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/vans">
          Vans
        </Link>
      </nav>
    </header>
  );
}
