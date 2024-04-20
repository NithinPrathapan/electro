import React from "react";
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
        <div className="flex gap-2 font-oswald text-lg tracking-wider font-semibold  md:gap-8 ">
          <a href="#home">Home</a>
          <a href="#category">Category</a>
          <a href="home">About us</a>
          <a href="home">Blog</a>
          <a href="home">Contact</a>
        </div>
      </div>
      <div className="cart-section flex flex-row justify-between sm:gap-4 gap-2 items-center">
        <IoSearch size={28} />
        <FaOpencart size={28} />
        <RiAccountCircleLine size={28} />
      </div>
    </nav>
  );
};

export default Nav;
