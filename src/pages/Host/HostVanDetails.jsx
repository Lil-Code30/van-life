import React from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";

export default function HostVanDetails() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }
  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>

        <nav className="flex gap-x-4 my-5">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
            to="."
            end
          >
            Details
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
            to="pricing"
          >
            Pricing
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
            to="photos"
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}
