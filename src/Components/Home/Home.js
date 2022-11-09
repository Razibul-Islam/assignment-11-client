import React from "react";
import Banner from "../Banner/Banner";
import HomeServices from "../HomeServices/HomeServices";
import MiddleBanner from "../MiddleBanner/MiddleBanner";
import Testimonial from "../Testimonial/Testimonial";
import useTitle from "../../hooks/title";


const Home = () => {
  useTitle("Home")
  return (
    <div>
      <Banner></Banner>
      <HomeServices></HomeServices>
      <MiddleBanner></MiddleBanner>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
