import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllReview = ({ review, handleDelete }) => {
  //   console.log(review);
  const { serviceName, message, _id, rating } = review;
  // console.log(_id);
  return (
    <div>
      <div className="my-10">
        <div className="text-center">
          <h1 className="font-bold text-3xl">{serviceName}</h1>
          <p className="flex justify-center text-yellow-600">
            {(() => {
              if (rating <= 1) {
                return (
                  <>
                    <FaStar />
                  </>
                );
              } else if (rating > 1 && rating < 2) {
                return (
                  <>
                    <FaStar />
                    <FaStarHalfAlt />
                  </>
                );
              } else if (rating <= 2) {
                return (
                  <>
                    <FaStar />
                    <FaStar />
                  </>
                );
              } else if (rating > 2 && rating < 3) {
                return (
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </>
                );
              } else if (rating <= 3) {
                return (
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </>
                );
              } else if (rating > 3 && rating < 4) {
                return (
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </>
                );
              } else if (rating <= 4) {
                return (
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </>
                );
              } else if (rating > 4 && rating < 5) {
                return (
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </>
                );
              } else {
                return (
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </>
                );
              }
            })()}
          </p>
          <p>{message}</p>
          <div className="mt-2">
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-600 py-3 px-5 rounded-md text-white font-bold text-xl"
            >
              Delete
            </button>
            <Link
              to={`/updateReview/${_id}`}
              className="bg-green-600 ml-5 py-3 px-5 rounded-md text-white font-bold text-xl"
            >
              <button>Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReview;
