import React from "react";
import headphone from "../assets/headphone.png";
const Hero = () => {
  return (
    <div
      className="px-4 h-full flex flex-col md:flex-row justify-between "
      id="home"
    >
      <div className="w-full sm:h-full   flex sm:flex-1 flex-col  ">
        <h1 className="font-prompt tracking-wide  sm:text-[70px] py-2 text-[50px] font-semibold mt-[10%] ml-[10%] ">
          The Electro <br /> A56 Headset
        </h1>
        <div className="flex items-center ml-[10%]   gap-6">
          <button className="text-xl shadow-md bg-white rounded-full sm:px-6 sm:py-3  px-4 py-3">
            Order Now
          </button>
          <button className="text-xl shadow-md bg-slate-200 rounded-full sm:px-6 sm:py-3  px-4 py-3">
            Shop More
          </button>
        </div>
      </div>
      <div className="flex flex-1 w-full justify-center items-start ">
        <img
          className="object-contain w-[100%] mt-4  "
          src={headphone}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
