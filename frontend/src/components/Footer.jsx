import React from "react";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";

const Footer = () => {
  return (
    <div className="flex flex-col bg-black">
      <Footer2 />
      <Footer1 />
    </div>
  );
};

export default Footer;
