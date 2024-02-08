import React from "react";

const Partnership = () => {
  return (
    <div className="py-8">
      <div className="flex items-center justify-center">
        <div className="w-[50px] h-[4px] bg-[#333333]"></div>
      </div>
      <h3 className="font-bold text-3xl text-[#ed514e] pt-5 text-center uppercase">
        partnership
      </h3>
      <div className="my-[70px] font-medium text-base text-[#717171] flex flex-col items-center justify-center">
        <p className="">
          By utilizing our overseas office network, we support Japanese
          companies' expansion overseas.
        </p>
        <p className="py-3">We understand local needs and</p>
        <p>
          provide specialized services for your business development, from
          market research to comprehensive legal and cultural support and
          translation services.
        </p>
      </div>
    </div>
  );
};

export default Partnership;
