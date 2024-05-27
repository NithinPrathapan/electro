import React, { useState } from "react";
import { FaOpencart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [dropDown, setDropdown] = useState(false);
  console.log(dropDown);
  const toggleDropdown = () => {
    setDropdown(!dropDown);
  };
  return (
    <section>
      <nav
        className="flex justify-between items-center
    "
      >
        <div className="">
          <h1 className="text-2xl font-oswald tracking-wide font-semibold px-4   text-gray-900   ">
            ELECTRO
          </h1>
        </div>
        <div className=" gap-12 font-Roboto font-semibold  justify-between mx-auto text-lg tracking-widest hidden sm:flex ">
          <h1 className="text-black  cursor-pointer ">Home</h1>
          <h1 className="text-black  cursor-pointer ">About</h1>
          <h1 className="text-black  cursor-pointer ">Product</h1>
          <h1 className="text-black  cursor-pointer ">Shop</h1>
          <h1 className="text-black  cursor-pointer ">Contact</h1>
        </div>

        <div className="flex gap-4 items-center px-2 ">
          <GiHamburgerMenu
            size={28}
            className="sm:hidden cursor-pointer"
            onClick={() => setDropdown(!dropDown)}
          />
          <FaOpencart size={28} />
        </div>
      </nav>
      <div>
      
      </div>
    </section>
  );
};

export default Nav;
