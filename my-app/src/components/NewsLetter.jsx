import React from "react";
// import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function NewsLetter() {
  return (
    <div className="bg-[#2699fb] pt-6 pl-2 mt-4">
      <div className="max-w-[1240px] mx-auto md:flex justify-between py-[40px">
        <div className="m-2">
          <h1 className="text-[20px] md:text-[30px] font-bold text-white">
            To know more about car manufacturing process ?
          </h1>
          <span className="text-white ">
            Sign up to our newsletter and stay up to date
          </span>
        </div>
        <div className="m-2">
          <input
            type="text"
            className="rounded p-3 mr-2 text-slate-300"
            placeholder="Email"
          />
          <button className="bg-green-600 text-white rounded m-4 p-3">Get Started</button>
          <br />
          <p className="text-white">We care about the protection of your data. <br />Read our policy.</p>
        </div>
      </div>
    </div>
  );
}
