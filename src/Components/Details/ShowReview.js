import React from "react";
import {
  FaRegEdit,
  FaStar,
  FaStarHalfAlt,
  FaTimes,
  FaTrashAlt,
} from "react-icons/fa";

const ShowReview = ({ review }) => {
  const { userName, userImg, message, rating } = review;
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start mb-7">
        <img src={userImg} alt="" className="w-16 mr-3 rounded-full" />
        <div>
          <div className="flex text-yellow-400 items-center">
            {/* {(() => {
            if (rating <= 1) {
              return (
                <>
                  <FaStar />
                </>
              );
            } else if (rating <= 2) {
              return (
                <>
                  <FaStar />
                  <FaStar />
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
            } else if (rating <= 4) {
              return (
                <>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
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
          })()} */}
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
          </div>
          <p className="font-bold">{userName}</p>
          <p className="mt-1">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowReview;
