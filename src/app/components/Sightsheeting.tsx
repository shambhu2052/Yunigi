import React from "react";
import Imageslides from "./Imageslides";

const Sightsheeting = () => {
  return (
    <div className="bg-[#F2E9E4]  py-5 h-[300px]">
      <div className="max-w-[1180px] container mx-auto ">
        <div className="flex items-center justify-center pt-10 ">
          <div className="w-[100px] h-[5px] bg-[#3D302B] rounded-lg "></div>
        </div>
        <h2 className="font-bold text-3xl text-[#ED514E] py-3 text-center uppercase">
          SIGHTSEEING
        </h2>
        <p className="font-semibold text-base text-center pt-3">
          About tourism
        </p>
      </div>

      {/* <Imageslides /> */}
    </div>
  );
};

export default Sightsheeting;
