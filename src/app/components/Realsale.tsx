import React from "react";

const Realsale = () => {
  return (
    <div className="px-4 md:px-0 py-7">
      <h2 className="font-bold text-4xl md:text-[69px] text-[#f4f4f4] text-center uppercase">
        Real EATATE SALE
      </h2>
      <p className="pt-3 font-bold text-xl text-black text-center">
        Owners who want to sell Japanese real estate to overseas
      </p>
      <div className="flex items-center justify-center my-4">
        <img src="/../assets/savinghouse.svg" alt="savinghouse image" />
      </div>
      <div className="font-normal text-base text-[#717171] my-4">
        <p className="text-center">
          Would you like to sell your real estate to overseas investors through
          our company ?
        </p>
        <p className="text-center pt-3">
          Using our unique network, we mainly sell income-generating real estate
          to overseas investors . We will strive to provide our customers with
          reliable information
        </p>
        <p className="text-center pt-3">
          and excellent services in the investment market for income real estate
          .
        </p>
      </div>
    </div>
  );
};

export default Realsale;
