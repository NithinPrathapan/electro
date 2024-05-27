import React from "react";

const Card = ({ title, img }) => {
  return (
    <div className="bg-white max-w-[300px] flex flex-col cursor-pointer p-4 mt-10 rounded-tr-[40px] rounded-bl-[40px]">
      <div className="w-full h-[250px]">
        <img
          className=" object-cover rounded-tr-[40px]  rounded-bl-[40px] w-full h-full"
          src={img}
          alt="category"
        />
      </div>
      <h1 className="text-center text-lg font-semibold uppercase my-2">
        {title}
      </h1>
      <p className="text-sm text-center py-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        provident nisi ratione!
      </p>
    </div>
  );
};

export default Card;
