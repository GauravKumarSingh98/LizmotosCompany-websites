import React from "react";
import External from "../assets/images/External.jpg";
import internal from "../assets/images/internal.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Research() {
  return (
    <>
      <Header />

      <h2 className="text-center font-lead text-6xl p-4 bg-gray-100 ">
        Market Research
      </h2>
      <p className="text-center text-xl p-4 bg-lime-100 ">
        Car manufacturers conduct research across these areas to gain insights
        into market dynamics, consumer preferences, technological advancements,
        and competitive trends. By leveraging research findings effectively,
      </p>
      <div className="bg-gray-100 py-20">
        <div className="max-w-[1240px]  mx-auto justify-between md:grid grid-cols-2 gap-2 ">
          <div className="max-w-[1240px]  mx-auto p-3 md:w-[70%] col-span-1 shadow-xl hover:scale-105 duration-[500ms]">
            <img src={External} alt="external" className="cursor-pointer" />
            <h2 className="font-italic pt-2 text-xl">
              External Business Factors
            </h2>
            <button className="bg-green-600 text-white rounded mt-5 px-5 ">
              Click Here
            </button>
          </div>
          <div className="max-w-[1240px]  mx-auto p-3 md:w-[70%] col-span-1 shadow-xl hover:scale-105 duration-[500ms]">
            <img src={internal} alt="internal" className="cursor-pointer" />
            <h2 className="font-italic pt-2 text-xl">
              Internal Business Factors
            </h2>
            <button className="bg-green-600 text-white rounded mt-5 px-5">
              Click Here
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
