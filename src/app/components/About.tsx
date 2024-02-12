import React from "react";

const About = () => {
  return (
    <div className="bgaboutus w-full h-[90vh] md:h-[80vh] px-4 md:px-0">
      <div className=" 2xl:max-w-[1180px] container mx-auto ">
        <div className="flex items-center justify-center pt-4 md:pt-10">
          <div className="w-[100px] h-[5px] bg-[#3D302B] rounded-lg "></div>
        </div>
        <h2 className="font-bold text-3xl text-[#333333] md:text-[#ED514E] py-3 text-center">
          About Us
        </h2>
        <p className="font-semibold text-xl md:text-3xl text-center pt-3 md:pt-8">
          Support for the Japanese market that combines business and tourism
        </p>
        <p className="font-normal text-xl text-[#717171] text-center py-3 md:py-14">
          We provide total support for business negotiations and tourism
          activities in Japan by arranging travel according to the needs of
          visitors for those who are thinking of expanding into the Japanese
          market .
        </p>
        <p className="font-normal text-xl text-[#717171] text-center py-3 md:py-10">
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
