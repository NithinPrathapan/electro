import React from "react";
import { featuredProducts } from "../constants/data";
import ProductCard from "../components/ProductCard";

const FeaturedProducts = () => {
  return (
    <div id="category " className="my-4 py-2 flex-col flex">
      <h1 className="text-3xl text-center font-prompt font-semibold">
        Featured products
      </h1>
      <div className="flex flex-wrap my-4 justify-center gap-8">
        {featuredProducts.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
