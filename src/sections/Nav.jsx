import React, { useState } from "react";
import { FaOpencart } from "react-icons/fa";

const Nav = () => {
  const [dropDown, setDropdown] = useState(false);
  console.log(dropDown);
  const toggleDropdown = () => {
    setDropdown(!dropDown);
  };
  return (
    <nav
      className="flex justify-between items-center
    "
    >
      <div className="">
        <h1 className="text-2xl font-oswald tracking-wide font-semibold px-2">
          ELECTRO
        </h1>
      </div>

      

      <div className="flex gap-2 items-center px-2"></div>
    </nav>
  );
};

export default Nav;
