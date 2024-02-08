import Link from "next/link";
import React from "react";
interface supporttype {
  imgsrc: string;
  title: string;
  description: string;
}
const support = [
  {
    imgsrc: "/../assets/support1.svg",
    title: "Assets",
    description:
      "Our experts will assess the property based on its location, size, use, current condition, etc. and confirm its market value. We will set an appropriate sales price based on the condition of the property and local demand.",
  },
  {
    imgsrc: "/../assets/support2.svg",
    title: "Consideration of contract conditions",
    description:
      "When selling, please consult with us regarding contract terms and transaction details. We offer flexible trading conditions tailored to your needs..",
  },
  {
    imgsrc: "/../assets/support3.svg",
    title: "Marketing",
    description:
      "Utilizing our unique network, we will develop advertising and promotions for overseas investors through effective marketing.",
  },
  {
    imgsrc: "/../assets/support4.svg",
    title: "Legal and tax support",
    description:
      "We also have expertise in legal procedures and tax matters related to international property sales. We will support you so that your transactions can proceed with peace of mind.",
  },
  {
    imgsrc: "/../assets/support5.svg",
    title: "Language support",
    description:
      "Japanese and foreign staff provide interpretation services to eliminate language barriers. It supports multiple languages ​​and supports smooth business operations..",
  },
];
const Salesupport = () => {
  return (
    <div className="my-8">
      <div className="flex items-center justify-center">
        <div className="w-[50px] h-[4px] bg-[#333333]"></div>
      </div>
      <h3 className="font-bold text-3xl text-[#ed514e] pt-5 text-center uppercase">
        sale support
      </h3>
      <div className="my-4 font-bold text-base text-[#333333] flex flex-col items-center justify-center">
        <p className="">Our property sales support</p>
      </div>
      <div className="max-w-[1050px] mx-auto flex flex-wrap justify-between mt-[120px] gap-2 md:gap-0">
        {support?.slice(0, 3).map((val: supporttype, index: number) => {
          return (
            <div
              className="w-full md:basis-[30%] bg-[#F4F4F4] p-4 rounded-md relative h-[350px]"
              key={index}
            >
              <img
                src={val?.imgsrc}
                alt="image od support"
                className="absolute top-[-28%] left-[21%]"
              />
              <div className="flex items-center justify-center mt-[80px]">
                <h2 className="text-center font-bold text-[18px] text-[#ed514e]">
                  {val?.title}
                </h2>
              </div>

              <p className="pt-6 font-normal text-base">{val?.description}</p>
            </div>
          );
        })}
      </div>
      <div className="max-w-[700px] mx-auto flex gap-2 md:gap-0 flex-wrap justify-between mt-[120px]">
        {support?.slice(3).map((val: supporttype, index: number) => {
          return (
            <div
              className="w-full md:basis-[45%] bg-[#F4F4F4] p-4 rounded-md relative h-[350px]"
              key={index}
            >
              <img
                src={val?.imgsrc}
                alt="image od support"
                className="absolute top-[-28%] left-[21%]"
              />
              <div className="flex items-center justify-center mt-[80px]">
                <h2 className="text-center font-bold text-[18px] text-[#3d302b]">
                  {val?.title}
                </h2>
              </div>

              <p className="pt-6 font-nromal text-base">{val?.description}</p>
            </div>
          );
        })}
      </div>
      <h3 className="pt-9 pb-5 font-normal text-base text-center">
        Please feel free to contact us regrading property sales
      </h3>
      <div className="flex items-center justify-center">
        <Link
          href="contact"
          className="bg-[#ed514e] px-6 rounded-[50px] py-5 text-white font-normal text-base"
        >
          Click here for sale consultation
        </Link>
      </div>
    </div>
  );
};

export default Salesupport;
