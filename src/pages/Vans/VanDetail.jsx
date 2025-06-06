import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function VanDetail() {
  const [vanDetail, setVanDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then(({ vans }) => setVanDetail(vans));
  }, [id]);

  return (
    <div className="van-detail-container mb-10">
      {vanDetail ? (
        <div className="van-detail flex flex-col lg:flex-row gap-5 md:w-[80%] md:mx-auto">
          <div className="container w-full lg:w-[90%]">
            <img src={vanDetail.imageUrl} />
          </div>
          <div>
            <i className={`van-type ${vanDetail.type} selected`}>
              {vanDetail.type}
            </i>
            <h2>{vanDetail.name}</h2>
            <p className="van-price">
              <span>${vanDetail.price}</span>/day
            </p>
            <p className="text-lg">{vanDetail.description}</p>
            <button className="link-button">Rent this van</button>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
