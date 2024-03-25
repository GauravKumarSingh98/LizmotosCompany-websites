import React from "react";
import hero from "../assets/images/hero.jpg";
export default function Banner() {
  return (
    <>
      <div>
        <img
          src={hero}
          alt="hero"
          className="w-full h-screen object-cover"
        ></img>
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-center mb-[40px] p-4">
          <h1 className="text-4xl font-bold text-white">
          Welcome to LizMotors <br/> Elevate Your Drive to New Heights
          </h1>
          <p className="mt-4 text-lg text-white">
            At LizMotors, we believe that every journey deserves to be
            extraordinary. <br />With a legacy of innovation and excellence, we're
            committed to crafting vehicles that redefine the driving experience.
          </p>
        </div>
      </div>
    </>
    // </div>
  );
}
