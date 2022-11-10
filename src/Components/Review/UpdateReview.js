import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateReview = () => {
  const review = useLoaderData();
  const navigate = useNavigate();

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const rating = event.target.rating.value;
    const message = event.target.message.value;
    const newReview = { rating, message };

    fetch(`http://localhost:5000/updateReview/${review._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        navigate("/review");
      });
  };

  return (
    <div>
      <h1 className="text-6xl font-semibold font-mono mb-10">
        Update {review.serviceName} Review
      </h1>
      <form onSubmit={handleUpdateUser} className="w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Ratings
            </label>
            {/* <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Ratings 0 - 5"
                name="rating"
              /> */}
            <select
              name="rating"
              defaultValue={review.rating}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="1.5">1.5</option>
              <option value="2.5">2.5</option>
              <option value="3.5">3.5</option>
              <option value="4.5">4.5</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Message
            </label>
            <textarea
              defaultValue={review.message}
              className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              placeholder="Review Message......"
              name="message"
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
};

export default UpdateReview;
