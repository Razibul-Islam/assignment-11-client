import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import HomeServiceLimit from "./HomeServiceLimit";

const HomeServices = () => {
  const services = useLoaderData();
  return (
    <div className="mt-10">
      <h1 className="text-6xl font-semibold text-center">My Service</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-7">
        {services.map((service) => (
            <HomeServiceLimit
              key={services?.uid}
              SingleService={service}
            ></HomeServiceLimit>
          ))}
      </div>
      <div className="flex justify-end -mt-10">
        <Link to="/services" className="btn bg-head border-0 mt-5 text-xl">
          See All services
        </Link>
      </div>
    </div>
  );
};

export default HomeServices;
