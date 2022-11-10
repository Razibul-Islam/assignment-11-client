import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleService from "./SingleService";
import useTitle from "../../hooks/title";


const AllServices = () => {
  const services = useLoaderData();
  useTitle("All service")
  // console.log(services);
  return (
    <div className="mt-10">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
            <span className="font-semibold text-lg text-primary mb-2 block">
              My Services
            </span>
            <h2
              className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
            >
              What I Offer
            </h2>
            <p className="text-base text-body-color">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {services.map((singleService) => (
          <SingleService
            key={singleService._id}
            singleService={singleService}
          ></SingleService>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
