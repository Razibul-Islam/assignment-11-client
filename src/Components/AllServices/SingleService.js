import React from "react";
import { Link } from "react-router-dom";

const SingleService = ({ singleService }) => {
  const { description, logoURL, price, rating, service, _id } = singleService;
  return (
    <div className="px-4">
      <div
        className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
      >
        <div
          className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
        >
          <img src={logoURL} alt="" />
        </div>
        <h4 className="font-semibold text-xl text-dark mb-3">{service}</h4>
        <p>Price: ${price}</p>
        <p>Ratings: {rating}</p>
        <p className="text-body-color">
          {description.length > 100 ? (
            <p>{description.slice(0, 100) + "..."}</p>
          ) : (
            <p>{description}</p>
          )}
        </p>
        <div className="text-right">
          <button className="bg-gray-400 py-2 px-3 text-white rounded-lg">
            <Link className="font-bold" to={`/details/${_id}`}>
              View Details
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
