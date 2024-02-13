import React from "react";

const Newbanner = () => {
  return (
    <div>
      <div className="newsbanner h-[40vh]"></div>
      <div className="my-5 max-w-[1180px] mx-auto px-4 md:px-0">
        <div className="flex gap-4 items-center">
          <div className="w-[130px] h-[3px] bg-[#ED514E]"></div>
          <h2 className="font-bold text-4xl text-[#ed514e]">News</h2>
        </div>
      </div>
    </div>
  );
};

export default Newbanner;
