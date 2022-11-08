import React from "react";
import { Link } from "react-router-dom";

const SingleService = ({ singleService }) => {
  const { discription, imgURL, price, rating, service, _id } = singleService;
  return (
    <div class="px-4">
      <div
        class="
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
          class="
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
          <img src={imgURL} alt="" />
        </div>
        <h4 class="font-semibold text-xl text-dark mb-3">{service}</h4>
        <p>Price: ${price}</p>
        <p class="text-body-color">
          {discription.length > 100 ? (
            <p>
              {discription.slice(0, 100) + "..."}
              <Link className="font-bold" to="">
                Read More
              </Link>
            </p>
          ) : (
            <p>{discription}</p>
          )}
        </p>
      </div>
    </div>
  );
};

export default SingleService;
