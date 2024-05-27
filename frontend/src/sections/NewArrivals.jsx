import React from "react";
import headphone from "../assets/headphone.png";

const NewArrivals = () => {
  return (
    <div className="">
      <h1 className="text-3xl mb-8 text-center font-prompt font-semibold mx-auto">
        New Arrivals
      </h1>
      <div className="flex flex-col sm:flex-row justify-center mx-auto max-w-7xl gap-2">
        <div className=" p-6 flex flex-1 flex-col gap-4 justify-start border-2 rounded-xl">
          <h1 className="text-white text-3xl font-semibold font-oswald tracking-wider">
            JBL Super bass Headset
          </h1>
          <button className="text-white  w-[200px] my-3 font-bold bg-blue-500 rounded-md px-4 py-2 left-4 bottom-2">
            Shop Now
          </button>
          <img src={headphone} alt="product" />
        </div>
        <div className="flex flex-1 flex-col border-2 rounded-lg p-2 gap-2">
          <div className="flex gap-2 bg-gray-200 p-2 rounded-lg">
            <img
              className="rounded-lg"
              width={100}
              height={100}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdu0TXTXy5as5WD4T8jNMZi05HVzN16t_X_cV0hvjjrA&s"
              alt="card"
            />
            <div className="flex flex-col">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>⭐⭐⭐⭐</p>
              <p>Rs. 399</p>
            </div>
          </div>
          <div className="flex gap-2 bg-gray-200 p-2 rounded-lg">
            <img
              className="rounded-lg"
              width={100}
              height={100}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdu0TXTXy5as5WD4T8jNMZi05HVzN16t_X_cV0hvjjrA&s"
              alt="card"
            />
            <div className="flex flex-col">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>⭐⭐⭐⭐</p>
              <p>Rs. 399</p>
            </div>
          </div>
          <div className="flex gap-2 bg-gray-200 p-2 rounded-lg">
            <img
              className="rounded-lg"
              width={100}
              height={100}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdu0TXTXy5as5WD4T8jNMZi05HVzN16t_X_cV0hvjjrA&s"
              alt="card"
            />
            <div className="flex flex-col">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>⭐⭐⭐⭐</p>
              <p>Rs. 399</p>
            </div>
          </div>
          <div className="flex gap-2 bg-gray-50 p-2 rounded-lg">
            <img
              className="rounded-lg"
              width={100}
              height={100}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdu0TXTXy5as5WD4T8jNMZi05HVzN16t_X_cV0hvjjrA&s"
              alt="card"
            />
            <div className="flex flex-col">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>⭐⭐⭐⭐</p>
              <p>Rs. 399</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
