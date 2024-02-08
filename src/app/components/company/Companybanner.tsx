import React from "react";

const Companybanner = () => {
  return (
    <div className="companybanner h-[70vh] relative">
      <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-white">
        <h2 className="text-center font-bold text-4xl">Company</h2>
        <div className="bg-white w-[170px] h-[2px] mt-5"></div>
        <p className="text-center pt-5 font-medium text-base">About us</p>
      </div>
    </div>
  );
};

export default Companybanner;
