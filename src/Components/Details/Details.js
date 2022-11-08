import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const { discription, imgURL, price, rating, service} = useLoaderData();

  return (
    <div>
      <div
        className="h-[600px] bg-no-repeat bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-gray-400"
        style={{
          backgroundImage: `url(${imgURL})`,
        }}
      >
        <p className="uppercase p-2 bg-gray-400 text-gray-800">PhotoGraphy</p>
        <h1 className="lg:text-7xl text-2xl">{service}</h1>
      </div>
      <div className="w-5/6 mx-auto bg-white -mt-10 p-5 ">
        <p>{discription}</p>
        <div className="mt-5 text-xl">
          <p>Price: ${price}</p>
          <p className="flex items-center">
            Ratings: {rating} <FaStar className="pl-2 text-2xl text-yellow-400" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
