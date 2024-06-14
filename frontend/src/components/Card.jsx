import React from "react";
const Card = ({ products }) => {
  return (
    <div className="bg-gradient-to-br font-monster  from-[#141E30] to-[#243B55] w-[300px] max-h-[380px] min-h-[360px] shadow-md  rounded-md  p-4 flex flex-col gap-2 ">
      <div className="flex justify-center items-center rounded-md bg-transparent h-[180px]">
        <img
          className="rounded-md object-contain  mx-auto shadow-xl min-w-full h-full "
          src={products.imageUrl}
          alt="product"
        />
      </div>
      <div className="flex justify-between gap-6 items-center">
        <h1 className="text-white  font-semibold text-lg">{products.brand}</h1>
        <button
          id="button"
          className="bg-yellow-400  text-sm rounded-full py-2 px-4 font-semibold
          border-none
         "
        >
          Add to cart
        </button>
      </div>
      <div className="flex">
        <h1 className="text-yellow-300 rounded-md tracking-widest font-semibold border-yellow-200 border p-2">
          {products.model}
        </h1>
      </div>
      <div className="flex flex-wrap text-white tracking-tighter text-sm ">
        <h1 className="line-clamp-1">{products.description}</h1>
      </div>

      <div className="text-yellow-300 font-semibold">
        <h1>
          Price : <span>$ {products.price}</span>
        </h1>
      </div>
    </div>
  );
};

export default Card;
