import React from "react";
import Card from "../components/Card";

const ShopByCategory = () => {
  return (
    <div id="category " className="my-4 py-2 flex-col flex">
      <h1 className="text-3xl text-center font-prompt font-semibold">
        Shop By Category
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        <Card
          title="Mobile and accessories"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbHW51biVnj-yeet1UnVFZtBhDcDggqldLrOMwU559wg&s"
        />
        <Card
          title="Computer and Accessories"
          img="https://w0.peakpx.com/wallpaper/636/836/HD-wallpaper-colorful-laptop-with-black-background-black-aesthetic.jpg"
        />
        <Card
          title={"Miscellaneous items"}
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXniN7TxCOaL6XbWk55LcnmLrtPAtr3B2RANtdS8g0tw&s"
          }
        />
      </div>
      <div className=" justify-center flex my-4">
        <button className="text-xl shadow-md max-w-sm bg-white rounded-full sm:px-6 sm:py-3  px-4 py-3">
          Shop All
        </button>
      </div>
    </div>
  );
};

export default ShopByCategory;
