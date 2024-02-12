import React from "react";

const Servicebanner = () => {
  return (
    <div className="mainservicebanner h-[70vh] relative">
      <h2 className="text-center font-semibold text-2xl md:text-3xl text-white pb-6 pt-[89px] md:pt-[160px] tracking-[3px]">
        For those considering international business expansion
      </h2>
      <div className="flex items-center justify-center mt-[5px]">
        <div className="w-[80px] bg-white h-[2px]"></div>
      </div>
      <p className="text-center text-white font-normal text-base tracking-[2px] pt-5">
        We offer comprehensive services to support your success in the Japanese
        market.
      </p>
      <p className="text-center text-white font-normal text-base tracking-[2px] pt-5">
        We promise to help businesses from overseas leave their mark on the
        Japanese market and achieve results.
      </p>
    </div>
  );
};

export default Servicebanner;
