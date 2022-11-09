import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/title";
import { AuthContext } from "../Authentication/Authentication";
import AllReview from "./AllReview";

const Review = () => {
  const { user, loading } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("Review");

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`http://localhost:5000/reviewDelete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = reviews.filter((odr) => odr._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/MyReview?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(user);
  return (
    <div>
      <div
        className="h-[500px] flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${"https://images.pexels.com/photos/8634711/pexels-photo-8634711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
        }}
      >
        <img src={user?.photoURL} alt="" className="rounded-full h-96 w-96" />
        <h1 className="font-bold text-5xl text-white">{user?.displayName}</h1>
      </div>
          <div className="grid grid-cols-2 gap-14">
        {reviews.map((review) => (
          <AllReview
            key={review._id}
            review={review}
            handleDelete={handleDelete}
          ></AllReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
