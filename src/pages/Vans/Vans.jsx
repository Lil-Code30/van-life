import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vansInfos, setVansInfos] = useState([]);

  useEffect(() => {
    try {
      fetch("/api/vans")
        .then((res) => res.json())
        .then(({ vans }) => setVansInfos(vans));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const vanElements = vansInfos.map((van) => (
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

  console.log(vansInfos);
  return (
    <div className="van-list-container">
      <h1 className="text-3xl md:text-4xl font-bold font-inter">
        Explore our van options
      </h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
