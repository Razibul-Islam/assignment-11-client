import React from "react";
import { useLoaderData } from "react-router-dom";
import Review from "./Review";
import useTitle from "../../hooks/title";


const Details = () => {
  const { discription, imgURL, service, _id } = useLoaderData();
  useTitle('Details');

  return (
    <div>
      <div
        className="h-[600px] bg-no-repeat bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-gray-400"
        style={{
          backgroundImage: `url(${imgURL})`,
        }}
      >
        <p className="uppercase p-2 bg-black text-white">PhotoGraphy</p>
        <h1 className="lg:text-7xl text-2xl text-white">{service}</h1>
      </div>
      <div className="w-5/6 mx-auto bg-white -mt-10 p-5">
        <p>{discription}</p>
        <div>
          <Review id={_id} name={service}></Review>
        </div>
      </div>
    </div>
  );
};

export default Details;
