import React from "react";
import offer from "../assets/offer.png";
import tv from "../assets/tv.png";
import laptop from "../assets/laptop.png";
import mobile from "../assets/mobile.png";
import fridge from "../assets/fridge.png";

const ShopByCategory = () => {
  return (
    <div className="bg-[#00eeee4c] sm:w-[80%]  mx-auto sm:gap-12  gap-5  rounded-md p-4 flex sm:flex-row justify-around   items-center text-[8px] sm:text-md md:text-[13px]">
      <div className="flex flex-col  items-center justify-center gap-2 text-center  font-semibold font-monster ">
        <img
          className="cursor-pointer hover:scale-105 transition-all duration-300 sm:w-[70px] w-[30px] h-auto"
          src={offer}
          alt="offer"
        />
        <h1>Top offers</h1>
      </div>
      <div className="flex flex-col  items-center justify-center gap-2 text-center  font-semibold font-monster ">
        <img
          className="cursor-pointer hover:scale-105 transition-all duration-300 sm:w-[70px] w-[30px] h-auto"
          src={tv}
          alt="elec"
        />
        <h1>Home Appliances</h1>
      </div>
      <div className="flex flex-col  items-center justify-center gap-2 text-center  font-semibold font-monster ">
        <img
          className="cursor-pointer hover:scale-105 transition-all duration-300 sm:w-[70px] w-[30px] h-auto"
          src={laptop}
          alt=""
        />
        <h1>Electronics</h1>
      </div>
      <div className="flex flex-col  items-center justify-center gap-2 text-center  font-semibold font-monster ">
        <img
          className="cursor-pointer hover:scale-105 transition-all duration-300 sm:w-[70px] w-[30px] h-auto"
          src={mobile}
          alt=""
        />
        <h1>Mobile phones</h1>
      </div>
      <div className="flex flex-col  items-center justify-center gap-2 text-center  font-semibold font-monster ">
        <img
          className="cursor-pointer hover:scale-105 transition-all duration-300 sm:w-[70px] w-[30px] h-auto"
          src={fridge}
          alt=""
        />
        <h1 className="">Kitchen appliances</h1>
      </div>
    </div>
  );
};

export default ShopByCategory;
