import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Authentication/Authentication";
import LoginReview from "./LoginReview";
import ShowReview from "./ShowReview";

const Review = ({ id, name }) => {
  const { user, loading } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);


  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const rating = form.rating.value;
    const message = form.message.value;
    const userName = user?.displayName;
    const email = user?.email;
    const userImg = user?.photoURL;
    const yearDate = Date.now();

    const serviceId = id;
    const serviceName = name;
    const review = {
      rating,
      message,
      userImg,
      userName,
      email,
      serviceId,
      serviceName,
      date: yearDate,
    
    };


    fetch(`http://localhost:5000/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        // console.log(data);
        review._id = data.insertedId;
        setReviews((prev) => [...prev, review]);
        // console.log(data);
        if (data.acknowledged) {
          toast.success("Review Added Success");
        }
      })
      .catch((err) => console.error(err));
  };
  // console.log(reviews);

  useEffect(() => {
    const url = `http://localhost:5000/review?serviceName=${name}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
        // setRefresh(!refresh);
        setRefresh((prev) => !prev);
      });
  }, [ name]);

  // console.log(reviews);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20">
      <div className=" mb-10">
        <h1 className="text-6xl font-semibold font-mono mb-10">Review</h1>
        <div className=" mb-5">
          {reviews.map((review) => (
            <ShowReview key={review._id} review={review}></ShowReview>
          ))}
        </div>
      </div>
      <LoginReview handleReview={handleReview}></LoginReview>
    </div>
  );
};

export default Review;
