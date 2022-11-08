import React from "react";

const Testimonial = () => {
  return (
    <div>
      <h1 className="text-7xl text-center font-mono tracking-widest mt-10 -mb-20">
        ABOUT
      </h1>
      <div className="flex mt-20">
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={
              "https://images.pexels.com/photos/1466845/pexels-photo-1466845.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
            className="h-4/5"
          />
        </div>
        <div className="w-1/2 mt-20">
          <h3 className="text-4xl font-[Caveat] mb-5">About Me</h3>
          <h1 className="text-6xl mb-10 font-serif">
            Making Precious
            <br />
            Moments of Wedding.
          </h1>
          <p className="text-xl">
            Nec ornare pede letius blandit quam ipsum sollicitudin dictum
            ultrices. Elementum ullamcorper malesuada magna senectus nisi augue.
            Adipiscing scelerisque eu vitae ligula donec inceptos gravida
            dapibus sollicitudin placerat. Velit volutpat mi vulputate nunc
            tempor blandit convallis semper ad sem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
