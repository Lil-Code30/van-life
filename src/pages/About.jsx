import { Link } from "react-router-dom";

import bgImg from "../assets/images/about-hero.png";

export default function About() {
  return (
    <div className=" w-full border h-[90dvh] font-inter">
      <div>
        <img
          src={bgImg}
          className="w-full mb-3 md:max-h-[500px]  object-cover "
        />
      </div>
      <div className="text-[#161616] px-5">
        <h1 className="mb-5 font-bold text-4xl md:text-5xl">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="mb-5 text-lg">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="text-lg">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="mb-2 mt-10 px-5 bg-[#FFCC8D] text-[#161616] mx-5 py-5 rounded-lg flex flex-col">
        <h2 className=" text-2xl md:text-3xl font-bold mb-8">
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <Link
          className="bg-[#161616] font-inter font-bold text-lg md:text-xl text-white w-fit mb-2 px-5 py-3 rounded-lg"
          to="/vans"
        >
          Explore our vans
        </Link>
      </div>
    </div>
  );
}
