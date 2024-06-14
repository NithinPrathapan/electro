import React from "react";

const Footer2 = () => {
  return (
    <div className="flex flex-col text-slate-300 sm:flex-row justify-around py-16 gap-8 ">
      <div className="flex flex-col gap-4 justify-around text-center items-center ">
        <h1 className="text-2xl font-semibold text-white">Products</h1>
        <ul className="flex flex-col gap-2 text-lg">
          <li>Electro</li>
          <li>Headset</li>
          <li>Mobile</li>
          <li>Home Appliances</li>
          <li>Kitchen Appliances</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 justify-center text-center items-center">
        <h1 className="text-2xl font-semibold text-white">Help</h1>
        <ul className="flex flex-col gap-2 text-lg">
          <li>About</li>
          <li>FAQ</li>
          <li>Create an Account</li>
          <li>Login</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 justify-center text-center items-center">
        <h1 className="text-2xl font-semibold text-white">Pages</h1>
        <ul className="flex flex-col gap-2 text-lg">
          <li>Product Page</li>
          <li>View Cart</li>
          <li>Privacy and Policy</li>
          <li>Security</li>
          <li>Touch with us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer2;
