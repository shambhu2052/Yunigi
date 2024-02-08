import React from "react";

const About = () => {
  return (
    <div className="bgaboutus w-full h-[80vh]">
      <div className=" 2xl:max-w-[1180px] container mx-auto ">
        <div className="flex items-center justify-center pt-10">
          <div className="w-[100px] h-[5px] bg-[#3D302B] rounded-lg "></div>
        </div>
        <h2 className="font-bold text-3xl text-[#ED514E] py-3 text-center">
          About Us
        </h2>
        <p className="font-semibold text-3xl text-center pt-8">
          Support for the Japanese market that combines business and tourism
        </p>
        <p className="font-normal text-xl text-[#717171] text-center py-14">
          We provide total support for business negotiations and tourism
          activities in Japan by arranging travel according to the needs of
          visitors for those who are thinking of expanding into the Japanese
          market .
        </p>
        <p className="font-normal text-xl text-[#717171] text-center py-10">
          By combining business and tourism,
          <br />
          we provide an opportunity for everyone to experience the charm of
          Japan and increase interest in the Japanese market.
        </p>
      </div>
    </div>
  );
};

export default About;
