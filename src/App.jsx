import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#87e8f7]  to-[#ffffff] ">
      <Nav />
      <Hero />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
