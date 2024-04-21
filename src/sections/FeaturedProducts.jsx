import React from "react";
import { featuredProducts } from "../constants/data";
import ProductCard from "../components/ProductCard";

const FeaturedProducts = () => {
  return (
    <div
      id="category "
      className="my-4 py-2 flex-col flex justify-end items-end px-8 mx-auto "
    >
      <h1 className="text-3xl text-center font-prompt font-semibold mx-auto">
        Featured products
      </h1>
      <div className="flex flex-wrap my-4 justify-center gap-8">
        {featuredProducts.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
      <button className="text-white  w-[200px] my-3 font-bold bg-blue-500 rounded-md px-4 py-2 left-4 bottom-2">
        {" "}
        View All products
      </button>
    </div>
  );
};

export default FeaturedProducts;
