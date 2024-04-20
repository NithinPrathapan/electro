import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Nav from "./sections/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
