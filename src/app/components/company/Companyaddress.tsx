import React from "react";
import Map from "./Map";
interface compnayaddresstype {
  title: string;
  description: string;
}
const companyaddress = [
  {
    title: "Office",
    description:
      "1F Shin- Osaka 5th Doi Building, 1-2-4 Miyahara, Yodogawa -ku , Osaka 533-0033",
  },
  {
    title: "Main Office",
    description:
      "Studio Shin - Osaka 447, 1-17-5 Higashinakajima, Higashiyodogawa-ku, Osaka 533-0033",
  },
  {
    title: "TEL",
    description: "06-6105-1603",
  },
  {
    title: "FAX",
    description: "06-6105-1604",
  },
];
const Companyaddress = () => {
  return (
    <div>
      <div className="max-w-[1180px] container mx-auto  py-10 flex justify-between flex-wrap ">
        <div className="w-full md:basis-[46%]">
          <div className="flex gap-4">
            <div className="w-[130px] h-[3px] bg-[#ED514E] mt-5"></div>
            <div>
              <h2 className="font-bold text-4xl text-[#ed514e] uppercase">
                Address
              </h2>
              <h3 className=" pt-5 font-medium text-base text-[#333333]">
                Company Location
              </h3>
              <div className="mt-5 flex flex-col gap-2">
                {companyaddress?.map(
                  (val: compnayaddresstype, index: number) => {
                    return (
                      <div className="flex gap-3 " key={index}>
                        <h2>{val?.title}:</h2>
                        <h5>{val?.description}</h5>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:basis-[46%] rounded-lg">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Companyaddress;
