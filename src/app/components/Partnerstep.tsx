import React from "react";

const Partnerstep = () => {
  return (
    <div className="bg-[#F4F4F4] py-10 h-full md:h-[150vh] overflow-hidden px-4 md:px-0">
      <div className="max-w-[1180px] container mx-auto relative ">
        <img
          src="/../assets/line.svg"
          alt="line"
          className="object-contain absolute z-10 left-4 top-14 md:block hidden"
        />
        <div className="flex flex-wrap md:flex-nowrap gap-7">
          <div className="flex item-center justify-center w-full md:basis-[15%] md:justify-start">
            <div className=" flex justify-center items-center bg-[#F2E9E4] w-[150px] h-[150px] rounded-full z-50">
              <img src="/../assets/step1.svg" alt="step" />
            </div>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="font-bold text-4xl text-[#333333]">
              01Market{" "}
              <span className="pl-5 font-bold text-[26px] text-[#ed514e]">
                research
              </span>
            </h2>
            <div className="bg-white rounded-lg p-4 mt-5">
              <p className="font-normal text-base text-[#333333] max-w-[500px] ">
                Based on local information, it is possible to understand market
                trends and consumer needs in real time, and develop and improve
                products and services based on this information. Through
                repeated trial and error, we can provide products and services
                that are more closely aligned with local demand.
              </p>
            </div>
          </div>
        </div>
        <div className="md:pl-[120px] flex flex-wrap md:flex-nowrap gap-7 mt-5">
          <div className="flex items-center justify-center w-full md:basis-[15%] md:justify-start">
            <div className="flex justify-center items-center bg-[#F2E9E4] w-[150px] h-[150px] rounded-full z-50">
              <img src="/../assets/step2.svg" alt="step" />
            </div>
          </div>

          <div className="text-center md:text-start">
            <h2 className="font-bold text-4xl text-[#333333]">
              02Legal
              <span className="pl-5 font-bold text-[26px] text-[#ed514e]">
                /Regulatory Support
              </span>
            </h2>
            <div className="bg-white rounded-lg p-4 mt-5">
              <p className="font-normal text-base text-[#333333] max-w-[500px] ">
                We utilize local networks and collaborate with professionals in
                each industry to plan and implement measures to comply with
                legal regulations. Ensure business sustainability while
                minimizing legal risks.
              </p>
            </div>
          </div>
        </div>
        <div className="md:pl-[240px] flex gap-7 flex-wrap md:flex-nowrap mt-5">
          <div className="flex items-center justify-center w-full md:basis-[15%] md:justify-start">
            <div className="flex justify-center items-center bg-[#F2E9E4] w-[150px] h-[150px] rounded-full z-50">
              <img src="/../assets/step3.svg" alt="step" />
            </div>
          </div>

          <div className="text-center md:text-start">
            <h2 className="font-bold text-4xl text-[#333333]">
              02Legal
              <span className="pl-5 font-bold text-[26px] text-[#ed514e]">
                partnerships
              </span>
            </h2>
            <div className="bg-white rounded-lg p-4 mt-5">
              <p className="font-normal text-base text-[#333333] max-w-[500px] ">
                We leverage the local networks we have already built to promote
                collaboration with business partners and suppliers in each
                country. We also help build relationships with local business
                communities and government agencies.
              </p>
            </div>
          </div>
        </div>
        <div className="md:pl-[360px] flex flex-wrap md:flex-nowrap gap-7 mt-5">
          <div className="flex items-center justify-center w-full md:basis-[15%] md:justify-start">
            <div className="flex justify-center items-center bg-[#F2E9E4] w-[150px] h-[150px] rounded-full z-50">
              <img src="/../assets/step4.svg" alt="step" />
            </div>
          </div>

          <div className="text-center md:text-start">
            <h2 className="font-bold text-4xl text-[#333333]">
              04
              <span className="pl-5 font-bold text-[26px] text-[#ed514e]">
                language support
              </span>
            </h2>
            <div className="bg-white rounded-lg p-4 mt-5">
              <p className="font-normal text-base text-[#333333] max-w-[500px] ">
                Japanese and foreign staff provide interpretation services to
                eliminate language barriers. It supports multiple languages
                ​​and supports smooth business operations. Through these
                services and support, we provide comprehensive support to help
                Japanese companies succeed in expanding overseas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerstep;
