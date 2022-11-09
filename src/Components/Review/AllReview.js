import React from "react";

const AllReview = ({ review, handleDelete }) => {
  //   console.log(review);
    const { serviceName, message, _id } = review;
    // console.log(_id);
  return (
    <div>
      <div className="my-10">
        <div className="text-center">
          <h1 className="font-bold text-3xl">{serviceName}</h1>
          <p>{message}</p>
          <div className="mt-2">
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-600 py-3 px-5 rounded-md text-white font-bold text-xl"
            >
              Delete
            </button>
            <button className="bg-green-600 ml-5 py-3 px-5 rounded-md text-white font-bold text-xl">
              Edit
            </button>
          </div>
        </div>
        {/* <div className="text-center">
          <h1 className="font-bold text-3xl">{serviceName}</h1>
          <p>{message}</p>
          <div className="mt-2">
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-600 py-3 px-5 rounded-md text-white font-bold text-xl"
            >
              Delete
            </button>
            <button className="bg-green-600 ml-5 py-3 px-5 rounded-md text-white font-bold text-xl">
              Edit
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AllReview;
