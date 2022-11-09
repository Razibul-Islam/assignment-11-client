import React from "react";

const MiddleBanner = () => {
  return (
    <div className="h-[500px] mt-5">
      <div
        className="h-full bg-cover bg-no-repeat bg-center bg-fixed text-white "
        style={{
          backgroundImage: `url(${"https://img.freepik.com/free-photo/beautiful-adult-couple-spends-time-summer-field_1157-24769.jpg?w=1060&t=st=1667905618~exp=1667906218~hmac=0a4997ee32fca94ba93b80ac77337560fd65b69cf995ef578748d756ca377cbb"})`,
        }}
      >
        <div className="bg-gradient-to-r from-black/20 to-black/20 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-[Caveat]">Get Started</h1>
          <h1 className="lg:text-7xl text-4xl font-serif">
            Make your wedding
            <br />a wonderful story.
          </h1>
          <p className="text-lg text-center">
            Quam etiam nunc fusce consectetuer libero tellus facilisis iaculis
            tempor senectus arcu
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiddleBanner;
