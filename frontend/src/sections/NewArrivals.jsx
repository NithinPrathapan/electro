import React from "react";
import headphone from "../assets/headphone.png";

const NewArrivals = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="sm:text-2xl text-xxl w-full text-center font-prompt font-bold mx-auto font-monster">
        New Arrivals
      </h1>
      <div className="flex flex-col sm:flex-row justify-center mx-auto max-w-7xl gap-2">
        <div className=" p-6 flex flex-1 flex-col gap-4 justify-start border-2 rounded-xl">
          <h1 className="text-white text-3xl font-semibold font-monster ">
            JBL Super bass Headset
          </h1>
          <div>
            <button
              className="bg-yellow-400  text-sm rounded-full py-2 px-4 font-semibold
          border-none
         "
            >
              Shop Now
            </button>
          </div>
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
