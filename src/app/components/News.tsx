import React from "react";
import Link from "next/link";
const News = () => {
  return (
    <div className="bg-[#F2E9E4] py-4 px-4 md:px-0">
      <div className="2xl:max-w-[1180px] container mx-auto">
        <div className="flex items-center justify-center pt-10 ">
          <div className="w-[100px] h-[5px] bg-[#3D302B] rounded-lg "></div>
        </div>
        <h2 className="font-bold text-3xl text-[#ED514E] py-3 text-center uppercase">
          News
        </h2>
        <p className="font-semibold text-base text-center pt-3 text-[#333333]">
          notice
        </p>
        <div className="flex items-center justify-center px-10 py-2  mt-5 ">
          <Link
            href="/news"
            className="text-white font-normal text-xl bg-[#ed514e] px-8 py-2 rounded-[5rem]"
          >
            see more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
