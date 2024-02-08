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
    <div className="bg-[#F2E9E4]">
      <div className="max-w-[800px] mx-auto py-8 ">
        <div className="p-4 border-l-2 border-solid border-black flex flex-col gap-5">
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
    </div>
  );
};

export default Companydetail;
