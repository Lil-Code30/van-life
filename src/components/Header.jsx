import { NavLink, Link } from "react-router-dom";

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
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
          to="/vans"
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="login-icon size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </Link>
      </nav>
    </header>
  );
}
