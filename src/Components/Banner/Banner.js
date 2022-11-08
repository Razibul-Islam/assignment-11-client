import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";
export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="lg:h-[600px] bg-cover bg-center bg-no-repeat text-white "
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"})`,
            }}
          >
            <div className="bg-gradient-to-r from-black to-transparent h-full w-full lg:pt-32 p-5 lg:pl-20">
              <h1 className="lg:text-7xl text-xl">
                Make Your Wedding
                <br />A Wonderful Story
              </h1>
              <p className="py-3 text-sm">
                Quam etiam nunc fusce consectetuer libero tellus facilisis
                iaculis tempor senectus arcu
              </p>
              <button className="bg-gray-400 p-4 rounded-lg">
                Discover More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="lg:h-[600px] bg-cover bg-center bg-no-repeat text-white "
            style={{
              backgroundImage: `url(${"https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
            }}
          >
            <div className="bg-gradient-to-r from-black to-transparent h-full w-full lg:pt-32 p-5 lg:pl-20">
              <h1 className="lg:text-7xl text-xl">
                Make Your Wedding
                <br />A Wonderful Story
              </h1>
              <p className="py-3 text-sm">
                Quam etiam nunc fusce consectetuer libero tellus facilisis
                iaculis tempor senectus arcu
              </p>
              <button className="bg-gray-400 p-4 rounded-lg">
                Discover More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="lg:h-[600px] bg-cover bg-center bg-no-repeat text-white "
            style={{
              backgroundImage: `url(${"https://images.pexels.com/photos/1488318/pexels-photo-1488318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
            }}
          >
            <div className="bg-gradient-to-r from-black to-transparent h-full w-full lg:pt-32 p-5 lg:pl-20">
              <h1 className="lg:text-7xl text-xl">
                Make Your Wedding
                <br />A Wonderful Story
              </h1>
              <p className="py-3 text-sm">
                Quam etiam nunc fusce consectetuer libero tellus facilisis
                iaculis tempor senectus arcu
              </p>
              <button className="bg-gray-400 p-4 rounded-lg">
                Discover More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="lg:h-[600px] bg-cover bg-center bg-no-repeat text-white "
            style={{
              backgroundImage: `url(${"https://images.pexels.com/photos/35981/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"})`,
            }}
          >
            <div className="bg-gradient-to-r from-black to-transparent h-full w-full lg:pt-32 p-5 lg:pl-20">
              <h1 className="lg:text-7xl text-xl">
                Make Your Wedding
                <br />A Wonderful Story
              </h1>
              <p className="py-3 text-sm">
                Quam etiam nunc fusce consectetuer libero tellus facilisis
                iaculis tempor senectus arcu
              </p>
              <button className="bg-gray-400 p-4 rounded-lg">
                Discover More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
