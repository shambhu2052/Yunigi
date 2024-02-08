import React from "react";

const Mainbanner = () => {
  return (
    <div className="w-full relative">
      <video
        autoPlay
        muted
        loop
        className="w-full h-[70vh] md:h-[100vh] object-fill "
      >
        <source src="/../assets/girlsvideo.mp4" type="video/mp4" />
      </video>
      <div className="w-full h-full absolute top-0 bg-[#ED514E]/[0.4]"></div>
      <div className="absolute top-[40%] left-[4%]">
        <h2 className="font-bold text-4xl text-white max-w-[955px] leading-[48px] tracking-[6px]">
          A fusion of business and tourism. Total support <br /> for the
          Japanese market{" "}
        </h2>
        <p className="pt-5 max-w-[500px] leading-[25px] text-white">
          Integration of Business and Tourism. Total Support for the Japanese
          Market.
        </p>
      </div>
    </div>
  );
};

export default Mainbanner;
