import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vansInfos, setVansInfos] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  useEffect(() => {
    try {
      fetch("/api/vans")
        .then((res) => res.json())
        .then(({ vans }) => setVansInfos(vans));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const displayedVans = typeFilter
    ? vansInfos.filter((van) => van.type === typeFilter)
    : vansInfos;

  const vanElements = displayedVans.map((van) => (
    <Link key={van.id} to={`/vans/${van.id}`}>
      <div className="van-tile pb-1.5">
        <img src={van.imageUrl} />
        <div className="van-info flex justify-between align-center">
          <h3 className="text-xl md:text-2xl mt-2 font-inter font-bold">
            {van.name}
          </h3>
          <p className="my-3 font-inter md:text-lg font-medium">
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <span className={`van-type mt-2 ${van.type} selected`}>{van.type}</span>
      </div>
    </Link>
  ));

  if (vansInfos.length === 0) return <h1>Loading...</h1>;
  return (
    <div className="van-list-container">
      <h1 className="text-3xl md:text-4xl font-bold font-inter">
        Explore our van options
      </h1>
      <div className="van-list-filter-buttons flex gap-3">
        <button
          onClick={() => setSearchParams({ type: "simple" })}
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
        >
          Luxury
        </button>
        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
        >
          Rugged
        </button>
        {typeFilter && (
          <button
            onClick={() => setSearchParams({})}
            className="van-type clear-filters"
          >
            Clear filter
          </button>
        )}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
