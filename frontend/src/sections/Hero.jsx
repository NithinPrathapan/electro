import React from "react";
import headphone from "../assets/headphone.png";
import { motion } from "framer-motion";
const Hero = () => {
  const text = "The Super Bass JBL Electro 355 Headset".split();
  return (
    <div
      className=" w-full flex flex-col md:flex-row gap-8 sm:p-12 p-4 items-center justify-center "
      id="home"
    >
      <div className="flex flex-col w-full h-full   justify-center items-center text-center">
        <div>
          <h1 className="flex  font-monster w-full     text-[40px] lg:text-[60px]  font-bold  justify-center  items-center ">
            {text.map((el, i) => (
              <motion.span
                className="text-gray-600"
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
        </div>
        {/* button */}
        <div className="flex gap-4">
          <motion.button
            animate={{ y: 10, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className=" shadow-md bg-white rounded-full  min-w-[150px] px-2 py-2"
          >
            Order Now
          </motion.button>
          <motion.button
            animate={{ y: 10, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="shadow-md bg-white rounded-full  min-w-[150px] px-2 py-2"
          >
            Shop More
          </motion.button>
        </div>
      </div>
      <div>
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          duration="500ms"
          className="flex flex-1 w-full  justify-center items-start "
        >
          <img
            className="object-cover  mt-8  sm:mt-4 "
            src={headphone}
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
