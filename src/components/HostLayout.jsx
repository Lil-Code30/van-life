import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="flex gap-x-4 4 py-4">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
          to="/host"
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
          to="/vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
          to="/host/reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
