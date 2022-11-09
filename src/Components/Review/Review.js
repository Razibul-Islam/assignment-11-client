import React from "react";
import useTitle from "../../hooks/title";

const Review = () => {
  useTitle("Review");
  return (
    <div>
      <div
        className="h-[500px] flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${"https://images.pexels.com/photos/8634711/pexels-photo-8634711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbUwgM7uzlTBqG8cnuev4gelI43cLEOn3nvlOOUFFdrw&s"
          alt=""
          className="rounded-full h-96 w-96"
        />
        <h1 className="font-bold text-5xl text-white">Name</h1>
      </div>
      <div className="flex justify-between gap-14 items-center my-10">
        <div className="text-center">
          <h1 className="font-bold text-3xl">service name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            consectetur excepturi neque ut dolore voluptatum accusamus quibusdam
            sunt. Voluptate, quidem.
          </p>
          <div className="mt-2">
            <button className="bg-red-600 py-3 px-5 rounded-md text-white font-bold text-xl">
              Delete
            </button>
            <button className="bg-green-600 ml-5 py-3 px-5 rounded-md text-white font-bold text-xl">
              Edit
            </button>
          </div>
        </div>
        <div className="text-center">
          <h1 className="font-bold text-3xl">service name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            consectetur excepturi neque ut dolore voluptatum accusamus quibusdam
            sunt. Voluptate, quidem.
          </p>
          <div className="mt-2">
            <button className="bg-red-600 py-3 px-5 rounded-md text-white font-bold text-xl">
              Delete
            </button>
            <button className="bg-green-600 ml-5 py-3 px-5 rounded-md text-white font-bold text-xl">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
