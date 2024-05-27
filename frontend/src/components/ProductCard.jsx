import React from "react";
import star from "../assets/star.png";

const ProductCard = ({ name, imageURL, price, description }) => {
  return (
    <div className="flex  bg-[#a1f0fc39] shadow-lg flex-col  w-[300px] p-4  rounded-lg ">
      <div className="relative h-[300px]">
        <img
          src={imageURL}
          alt="imageURL"
          className=" object-cover  bg-gray-300 rounded-tr-[40px]  rounded-bl-[40px] w-full h-full"
        />
        <button className="absolute text-white font-bold bg-blue-500 rounded-md px-4 py-2 left-4 bottom-2">
          Add to Cart
        </button>
      </div>
      <div>
        <img src={star} alt="rating" className="w-8 justify-center mx-4 my-4" />
      </div>
      <div>
        <h1 className="font-bold">Rs. {price} /-</h1>
      </div>
      <div>
        <h1 className="text-lg">{description}</h1>
      </div>
    </div>
  );
};

export default ProductCard;
