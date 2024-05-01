import React from "react";
import headphone from "../assets/headphone.png";

const NewArrivals = () => {
  return (
    <div className="">
      <h1 className="text-3xl mb-8 text-center font-prompt font-semibold mx-auto">
        New Arrivals
      </h1>
      <div className="flex flex-col sm:flex-row justify-center mx-auto max-w-7xl ">
        <div className=" p-6 flex flex-1 flex-col gap-4 justify-start border-2 rounded-xl">
          <h1 className="text-white text-3xl font-semibold font-oswald tracking-wider">
            JBL Super bass Headset
          </h1>
          <button className="bg-blue-500 py-2 px-4 text-lg font-semibold text-white rounded-lg w-[200px]">
            Shop Now
          </button>
          <img src={headphone} alt="product" />
        </div>
        <div className="flex flex-1"></div>
      </div>
    </div>
  );
};

export default NewArrivals;
