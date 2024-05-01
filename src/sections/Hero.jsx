import React from "react";
import headphone from "../assets/headphone.png";
import { motion } from "framer-motion";
const Hero = () => {
  const text = "The Super Bass JBL Electro 355 Headset".split(" ");
  return (
    <div
      className="px-4 h-full flex flex-col md:flex-row justify-between items-center "
      id="home"
    >
      <div className="w-full sm:h-full   flex sm:flex-1 flex-col ">
        <h1 className="font-prompt w-full text-[50px]  pt-2  font-semibold  ml-[10%] ">
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </h1>
        <p className="ml-[10%] mb-2"></p>
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
        <img className="object-contain w-[80%] mt-4  " src={headphone} alt="" />
      </div>
    </div>
  );
};

export default Hero;
