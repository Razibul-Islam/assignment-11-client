import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/title";

const Error = () => {
  useTitle("Error")
  return (
    <div>
      <div
        className="w-screen h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${"https://images.pexels.com/photos/635280/pexels-photo-635280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
        }}
      >
        <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  flex items-center justify-center">
          <div className="h-2/4 w-2/4 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 flex flex-col items-center justify-center text-white ">
            <h1 className="text-7xl font-serif">Error 404</h1>
            <h1 className="text-4xl font-serif py-2">Page not found</h1>
            <p className="text-center pb-2">
              The page you are looking for does not exist; it may have been
              moved,
              <br />
              or removed altogether.
            </p>
            <button className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 py-3 px-4">
              <Link to="/">Go back Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
