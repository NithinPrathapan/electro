import React from "react";
import ins from "../assets/ins.png";
import fb from "../assets/fb.png";
import wap from "../assets/wap.png";
import twi from "../assets/twi.png";
const Footer1 = () => {
  return (
    <footer className="flex flex-col gap-8 w-full justify-around py-10  items-center text-white">
      <div>
        <h1 className="text-4xl font-bold tracking-widest uppercase font-oswald text-[#2dffff]">
          Electro
        </h1>
      </div>
      <div className="flex flex-col gap-4 sm:w-[400px] text-center">
        <h1 className="text-lg font-monster">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facilis
          saepe error!
        </h1>
        <div className="flex gap-4 items-center justify-center">
          <img
            src={wap}
            alt="social"
            className="hover:scale-105 duration-300 transition-all ease-in cursor-pointer"
          />
          <img
            src={ins}
            alt="social"
            className="hover:scale-105 duration-300 transition-all ease-in cursor-pointer"
          />
          <img
            src={twi}
            alt="social"
            className="hover:scale-105 duration-300 transition-all ease-in cursor-pointer"
          />
          <img
            src={fb}
            alt="social"
            className="hover:scale-105 duration-300 transition-all ease-in cursor-pointer"
          />
        </div>
      </div>
      <div className="text-center sm:w-[80%] w-[90%]  flex flex-col gap-2">
        <p>© 2024 Electro. All rights reserved.</p>
        <p>
          This website and its content are the exclusive property of Electro.
          Unauthorized use, reproduction, or distribution of any part of this
          site, including but not limited to text, images, logos, and videos, is
          strictly prohibited without prior written consent from Electro.
        </p>
      </div>
    </footer>
  );
};

export default Footer1;
