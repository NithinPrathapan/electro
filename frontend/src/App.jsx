import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import PopularBrands from "./sections/PopularBrands";
import ShopByCategory from "./sections/ShopByCategory";
import NewArrivals from "./sections/NewArrivals";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#87e8f7]  to-[#ffffff] flex flex-col gap-12">
      <Nav />
      <div className="p-[20px]">
        <Hero />
        <ShopByCategory />
        <PopularBrands />
        <NewArrivals />
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};

export default App;
