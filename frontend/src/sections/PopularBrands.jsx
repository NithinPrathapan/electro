import React from "react";
import Card from "../components/Card";

const PopularBrands = () => {
  const products = [
    {
      id: 1,
      type: "mobile",
      brand: "SuperPhone",
      imageUrl: "http://localhost:5173/src/assets/headphone.png",
      price: 100,
      description: "lorem ipsum dolor sit amet lorem ipsum dolor",
      model: "X7 Pro Max",
    },
    {
      id: 2,
      type: "mobile",
      brand: "TechOne",
      imageUrl:
        "https://dlcdnwebimgs.asus.com/gain/4BB18AEF-347E-4DB6-B78C-C0FFE1F20385/w750/h470",
      price: 100,
      description: "lorem ipsum dolor sit amet lorem ipsum dolor",
      model: "Nova Z Flip",
    },
    {
      id: 3,
      type: "headset",
      brand: "AudioTech",
      imageUrl:
        "https://dlcdnwebimgs.asus.com/gain/4BB18AEF-347E-4DB6-B78C-C0FFE1F20385/w750/h470",
      price: 100,
      description: "lorem ipsum dolor sit amet lorem ipsum dolor",
      model: "Rhythm Xtra Bass",
    },
    {
      id: 4,
      type: "headset",
      brand: "Harmony",
      imageUrl:
        "https://dlcdnwebimgs.asus.com/gain/4BB18AEF-347E-4DB6-B78C-C0FFE1F20385/w750/h470",
      price: 100,
      description: "lorem ipsum dolor sit amet lorem ipsum dolor",
      model: "QuietPods Pro",
      color: "White",
    },
    {
      id: 5,
      type: "mobile",
      brand: "SuperPhone",
      imageUrl:
        "https://dlcdnwebimgs.asus.com/gain/4BB18AEF-347E-4DB6-B78C-C0FFE1F20385/w750/h470",
      price: 100,
      description: "lorem ipsum dolor sit amet lorem ipsum dolor",
      model: "G Lite",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="sm:text-2xl text-xxl w-full text-center font-prompt font-bold mx-auto font-monster">
        Popular Brands
      </h1>
      <div className="flex flex-wrap justify-center items-center mx-auto gap-6 ">
        {products.map((product) => (
          <Card products={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularBrands;
