import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import ShopByCategory from "./sections/ShopByCategory";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#87e8f7]  to-[#ffffff] ">
      <Nav />
      <Hero />
      <ShopByCategory />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
