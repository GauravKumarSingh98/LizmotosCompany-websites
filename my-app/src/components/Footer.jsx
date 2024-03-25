import React from "react";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-4 flex pt-10 p-4 gap-2 bg-[#6D6D6D] mt-4">
        <div className="cols-1 font-serif pl-4 pt-4 text-l text-white">
          <span className="">Making the world a better place through constructing elegant hierarchies.</span>
          <div className="flex pt-[40px] p-6 gap-12">
          <AiOutlineFacebook />
          <AiOutlineInstagram />
          <FaXTwitter />
          <AiOutlineYoutube />
          </div>
        </div>

        <div className="cols-1 md:pl-10 text-white">
          <h1 className="p-2 font-bold">Solutions</h1>
          <ul className="pl-5 ">
            <li className="cursor-pointer ">Marketing</li>
            <li className="cursor-pointer ">Analytics</li>
            <li className="cursor-pointer ">Commerce</li>
            <li className="cursor-pointer ">Insights</li>
          </ul>
        </div>

        <div className="cols-1 md:pl-6 text-white">
          <h1 className="p-2 font-bold">Support</h1>
          <ul className="pl-5 ">
            <li className="cursor-pointer ">Pricing</li>
            <li className="cursor-pointer ">Documentation</li>
            <li className="cursor-pointer ">Guides</li>
            <li className="cursor-pointer ">Status</li>
          </ul>
        </div>
        <div className="cols-1 md:pl-10 text-white">
          <h1 className="p-2 font-bold">Company</h1>
          <ul className="pl-5 ">
            <li className="cursor-pointer ">About</li>
            <li className="cursor-pointer ">Blog</li>
            <li className="cursor-pointer ">Jobs</li>
            
          </ul>
        </div>
      </div>
    </>
  );
}
