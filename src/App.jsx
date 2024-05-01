import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import ShopByCategory from "./sections/ShopByCategory";
import FeaturedProducts from "./sections/FeaturedProducts";
import NewArrivals from "./sections/NewArrivals";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#87e8f7] p-[20px]  to-[#ffffff] ">
      <Nav />
      <Hero />
      <ShopByCategory />
      <FeaturedProducts />
      <NewArrivals />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
