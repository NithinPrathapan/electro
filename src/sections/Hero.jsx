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
      <div className="w-full sm:h-full sm:text-left text-center flex sm:flex-1 flex-col ">
        <h1 className="font-prompt w-full sm:text-[50px] text-[30px]  pt-2  font-semibold  sm:ml-[10%] ">
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                delay: i / 10,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </h1>
        <p className="ml-[10%] mb-2"></p>
        <div className="flex items-center sm:ml-[10%] justify-center sm:justify-start gap-6">
          <motion.button
            animate={{ y: 20, scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="sm:text-xl shadow-md bg-white rounded-full sm:px-4 sm:py-3   px-2 py-2"
          >
            Order Now
          </motion.button>
          <motion.button
            animate={{ x: 0, y: 20, scale: 1 }}
            initial={{ x: 40, scale: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="sm:text-xl shadow-md bg-white rounded-full sm:px-4 sm:py-3  px-2 py-2"
          >
            Shop More
          </motion.button>
        </div>
      </div>
      <motion.div
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        duration="500ms"
        className="flex flex-1 w-full  justify-center items-start "
      >
        <img className="object-contain w-[80%] mt-4  " src={headphone} alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;
