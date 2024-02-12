import React from "react";
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
const Feature = () => {
  return (
    <div className="bg-[#F2E9E4] px-4 md:px-0">
      <div className=" py-[50px] max-w-[750px] mx-auto">
        <div className="flex items-center justify-center">
          <div className="w-[70px] h-[4px] bg-[#ED514E]"></div>
        </div>
        <h3 className="font-bold text-3xl text-[#333333] pt-5 text-center">
          Feature of our Services
        </h3>
        <div className="">
          {services?.map((val: servicetype, index: number) => {
            const isOdd = index % 2 === 1;
            return (
              <div
                className={`${
                  isOdd ? "md:flex-row-reverse" : ""
                }  bg-white rounded-md relative p-4 mt-10 flex justify-between gap-2 md:gap-0 items-center flex-wrap`}
                key={index}
              >
                <div className="w-full md:basis-[60%] ">
                  <h4 className="font-bold text-xl text-[#ed514e] text-justify">
                    {val?.titlename}
                  </h4>
                  <p className="font-normal text-base text-[#333333] text-justify">
                    {val?.description}
                  </p>
                </div>
                <div className="w-full md:basis-[30%] h-[200px] rounded-full shadow-2xl">
                  <img
                    src={val?.serviceimage}
                    className="w-[250px] md:w-full h-[250px] md:h-full rounded-full object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
