import React from "react";
interface compnaytype {
  title: string;
  description: string;
}
const companydetail = [
  {
    title: "Company Name",
    description: "Unige World Class Travel & Real Estate Co., Ltd.",
  },
  {
    title: "representative",
    description: "Kazuki Nakajo",
  },
  {
    title: "Establishment",
    description: "November 2023",
  },
  {
    title: "Business content",
    description:
      "Activities to attract foreign companies to promote domestic expansio Travel arrangements for foreign visitors to Japan Real estate sales and sales brokerage Travel industry Private lodging business Overseas expansion strategy",
  },
];
const Companydetail = () => {
  return (
    <div className="bg-[#F2E9E4] px-4 md:px-0">
      <div className="max-w-[800px] mx-auto py-8 md:block hidden">
        <div className="p-4 border-l-2 border-solid border-black flex flex-col gap-5 ">
          {companydetail?.map((val: compnaytype, index: number) => {
            return (
              <div className="flex justify-between" key={index}>
                <div className="basis-[20%]">
                  <h2 className="font-medium text-base text-[#ed514e] whitespace-pre max-w-[170px]">
                    {val?.title}
                  </h2>
                </div>
                <div className="basis-[75%]">
                  <p className="font-medium text-base text-[#333333]">
                    {val?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-8 md:hidden block">
        <div className="p-4 border-l-2 border-solid border-black flex flex-col gap-2">
          {companydetail?.map((val: compnaytype, index: number) => {
            return (
              <div key={index}>
                <h2 className="font-medium text-base text-[#ed514e] whitespace-pre max-w-[170px] pb-3">
                  {val?.title}
                </h2>
                <p className="font-medium text-base text-[#333333]">
                  {val?.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Companydetail;
