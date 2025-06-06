import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="flex gap-x-4">
        <Link className="nav-link" to="/host">
          Dashboard
        </Link>
        <Link className="nav-link" to="/host/income">
          Income
        </Link>
        <Link className="nav-link" to="/vans">
          Vans
        </Link>
        <Link className="nav-link" to="/host/reviews">
          Reviews
        </Link>
      </nav>
      <Outlet />
    </>
  );
}
