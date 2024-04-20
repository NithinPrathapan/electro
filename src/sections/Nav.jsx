import React from "react";
import splash from "../assets/splash.png";
import { FaOpencart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";

const Nav = () => {
  return (
    <nav className="flex px-4 py-6 justify-between m-0 items-center ">
      <div className="logo relative">
        <div>
          <h1 className="font-oswald font-semibold text-purple-900-500 text tracking-widest relative z-50  text-2xl left-6">
            ELECTRO
          </h1>
        </div>
      </div>
      <div className="routes hidden sm:block ">
        <div className="flex gap-2 font-oswald tracking-wider font-semibold  md:gap-8 ">
          <h1>Home</h1>
          <h1>Category</h1>
          <h1>About Us</h1>
          <h1>FAQ</h1>
          <h1>Blog</h1>
          <h1>Contact</h1>
        </div>
      </div>
      <div className="cart-section flex flex-row justify-between gap-2 items-center">
        <IoSearch size={28} />
        <FaOpencart size={28} />
        <RiAccountCircleLine size={28} />
      </div>
    </nav>
  );
};

export default Nav;
