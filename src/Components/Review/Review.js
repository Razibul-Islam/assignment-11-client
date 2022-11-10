import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import useTitle from "../../hooks/title";
import { AuthContext } from "../Authentication/Authentication";
import AllReview from "./AllReview";

const Review = () => {
  const { user, loading, logout } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("Review");

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`https://server-ruddy-one.vercel.app/reviewDelete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            // toast.error("Success Fully Deleted");
            toast.error("delete Successfully", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            const remaining = reviews.filter((odr) => odr._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  useEffect(() => {
    fetch(`https://server-ruddy-one.vercel.app/MyReview?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("Wedding-token")}`,
      },
    })
      // .then((res) => {
      //   if(st)
      //   res.json();
      // })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logout();
        }

        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user?.email, logout]);

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

  // console.log(user);
  return (
    <div>
      <div
        className="h-[500px] flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${"https://images.pexels.com/photos/8634711/pexels-photo-8634711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
        }}
      >
        <img src={user?.photoURL} alt="" className="rounded-full h-52 w-52" />
        <h1 className="font-bold text-5xl text-white">{user?.displayName}</h1>
      </div>
      <p className="font-bold text-3xl text-center mt-5 capitalize">
        {" "}
        {reviews.length < 1
          ? "You don't have any review please add some review"
          : `You have ${reviews.length} Review`}{" "}
      </p>
      <div className="grid md:grid-cols-2 md:gap-14">
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
