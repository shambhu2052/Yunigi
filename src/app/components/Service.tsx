import React from "react";
import Link from "next/link";
interface servicetype {
  serviceimage: string;
  titlename: string;
  description: string;
}
const services = [
  {
    serviceimage: "/../assets/service1.svg",
    titlename: "Inbound travel arrangement",
    description:
      "We customize itineraries to suit your needs and make all the arrangements for your trip, including flights, accommodations, ground",
  },
  {
    serviceimage: "/../assets/service2.svg",
    titlename: "Partnership Introduction",
    description:
      "We introduce suitable business partners for our customers, such as companies and local governments in Japan, and promote the building of good business relationships.",
  },
  {
    serviceimage: "/../assets/service3.svg",
    titlename: "Business negotiation support",
    description:
      "Japanese and foreign staff provide interpretation services to eliminate language barriers. It supports multiple languages ​​and supports smooth busines",
  },
];
const Service = () => {
  return (
    <div className="bg-[#F2E9E4] px-4 md:px-0">
      <div className="2xl:max-w-[1180px] container mx-auto">
        <div className="flex items-center justify-center pt-10 ">
          <div className="w-[100px] h-[5px] bg-[#3D302B] rounded-lg "></div>
        </div>
        <h2 className="font-bold text-3xl text-[#ED514E] py-3 text-center uppercase">
          Service
        </h2>
        <p className="font-semibold text-base text-center pt-3">
          Support for overseas expansion
        </p>
        <div className="flex gap-3 md:gap-0 md:justify-between flex-wrap py-3">
          {services.map((val: servicetype, index: number) => {
            return (
              <div
                className="w-full md:basis-[30%] bg-white rounded-lg shadow-lg p-3"
                key={index}
              >
                <div className="w-full ">
                  <div className="flex items-center justify-center">
                    <img
                      src={val?.serviceimage}
                      alt="image of services"
                      className="w-[200px] h-[200px]"
                    />
                  </div>
                  <h3 className="text-center font-bold text-2xl text-[#ed514e]">
                    {val?.titlename}
                  </h3>
                  <div className="flex items-center justify-center my-3">
                    <div className="w-[100px] h-[3px] bg-[#ed514e]"></div>
                  </div>
                  <p className="text-base font-normal font-sans text-center">
                    {val?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center px-10 py-2  mt-5 ">
        <Link
          href="/"
          className="text-white font-normal text-xl bg-[#ed514e] px-8 py-2 rounded-[5rem]"
        >
          see more
        </Link>
      </div>
    </div>
  );
};

export default Service;
