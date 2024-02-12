import React from "react";
import Link from "next/link";
const Assestformation = () => {
  return (
    <div>
      <div className="py-6 2xl:max-w-[1180px] container mx-auto px-4 md:px-0">
        <div className="flex items-center justify-center pt-5 md:pt-10 ">
          <div className="w-[100px] h-[5px] bg-[#3D302B] rounded-lg "></div>
        </div>
        <h2 className="font-bold text-3xl text-[#ED514E] py-3 text-center uppercase">
          Assest Formnation
        </h2>
        <p className="font-semibold text-base text-center pt-3">
          Assest Formation in Japan
        </p>
        <div className="flex flex-wrap justify-between items-center gap-4 md:gap-0 mt-5 border-b-[3px] border-solid border-[#Ed514e] relative">
          <div className="absolute left-[64%] md:left-[40%] md:transform translate-x-[-40%] bottom-[53%] md:bottom-[-10%] bg-white z-40 px-8 py-3 rounded-tr-[3rem] border-[3px] border-solid border-[#ed5146]">
            <p className="text-[#ed514e] font-semibold text-[18px] ">
              Real State Investment
            </p>
          </div>
          <div className="w-full md:basis-[46%] border-b-[6px] border-solid border-[#ed514e]">
            <div className="w-full h-auto">
              <img src="/../assets/formation1.webp" alt="image of fromation" />
            </div>
          </div>
          <div className="w-full md:basis-[46%]">
            <p className="font-normal text-base">
              We provide a wide range of property information to those
              interested in Japan's income-generating real estate market. We
              provide total support for the property acquisition process, from
              property research to contract conclusion.
            </p>
          </div>
        </div>
        <div className="flex justify-between  flex-wrap gap-4 md:gap-0 items-center mt-8 border-b-[3px] border-solid border-[#3D302B] relative">
          <div className="absolute right-[53%] md:right-[30%] transform  md:translate-x-[-30%] bottom-[40%] md:bottom-[-10%] bg-white z-40 px-8 py-3 rounded-tl-[3rem] border-[3px] border-solid border-[#3D302B]">
            <p className="text-[#3D302B] font-semibold text-[18px] ">
              Business acquistion
            </p>
          </div>
          <div className="w-full md:basis-[46%] order-2 md:order-1">
            <p className="font-normal text-base">
              We provide business acquisition services for those who want to own
              a restaurant or become a business owner in Japan.
            </p>
          </div>
          <div className="w-full md:basis-[46%] order-1 md:order-2 border-b-[6px] border-solid border-[#3D302B]">
            <div className="w-full h-auto">
              <img src="/../assets/formation2.webp" alt="image of fromation" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-10 py-2 my-10 ">
          <Link
            href="/"
            className="text-white font-normal text-xl bg-[#ed514e] px-8 py-2 rounded-[5rem]"
          >
            see more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Assestformation;
