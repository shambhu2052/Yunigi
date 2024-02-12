import React from "react";
interface networktype {
  id: string;
  title: string;
  description: string;
}
const network = [
  {
    id: "01",
    title: "Those interested inbound demand",
    description:
      "We specialize in inbound travel arrangements and aim to convey the charm of Japan to our customers through travel. Would you like to build a partnership with us and boost Japan's tourism business together?",
  },
  {
    id: "02",
    title: "Those considering expanding",
    description:
      "Utilizing our global network, we support Japanese companies expanding overseas and forming partnerships. We can support you in a variety of areas, from market research to law, culture, and language.",
  },
  {
    id: "03",
    title: "Real estate owner",
    description:
      "We utilize our unique network to sell income-generating real estate primarily to overseas investors. Would you like to sell your real estate to overseas investors through our company?",
  },
];
const Partnerbanner = () => {
  return (
    <div>
      <div className="partnerbanner h-[70vh] relative">
        <h2 className="text-center font-bold uppercase text-[33px] text-white pb-6  pt-[97px] md:pt-[160px] tracking-[3px]">
          Yunige <span className="lowercase">support</span>
        </h2>
        <div className="flex items-center justify-center mt-[3px]">
          <div className="w-[80px] bg-white h-[2px]"></div>
        </div>
        <p className="text-center text-white font-normal text-base tracking-[2px] pt-5 px-4 md:px-0">
          We support overseas expansion, which can be time-consuming and costly,
          with a variety of services. We aim for long-term business growth
        </p>
        <p className="text-center text-white font-normal text-base tracking-[2px] pt-5 px-4 md:px-0">
          through strategies that minimize risk . We promise to help businesses
          from overseas leave their mark on the Japanese market and achieve
          results.
        </p>
      </div>
      <div className="w-full h-[80vh] relative">
        <img src="/../assets/map.webp" alt="map" />
        <div className="absolute bottom-[-75%] md:bottom-[-60%] mx-4 md:left-[11%] 2xl:left-[19%] max-w-[1050px] md:mx-auto flex flex-wrap gap-3 md:gap-0  md:justify-between ">
          {network?.map((val: networktype, index: number) => {
            const bgcolor = index % 2 === 1;
            return (
              <div
                className="w-full md:basis-[30%] py-3 px-5 rounded-lg bg-white overflow-hidden relative shadow-2xl"
                key={index}
              >
                <div
                  className={`absolute w-[100px] h-[100px]  rounded-full ${
                    bgcolor ? "bg-black" : "bg-[#ed514e]"
                  } top-[-23%] left-[-13%]`}
                ></div>
                <h2 className="float-right font-bold text-6xl text-[#F2E9E4]">
                  {val?.id}
                </h2>
                <h3 className="text-justify font-bold text-xl text-black pt-4">
                  {val?.title}
                </h3>
                <p className="font-normal text-base text-[#333333] pt-6 text-justify">
                  {val?.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full mt-[450px] md:mt-[400px] h-[70vh] ">
        <img
          src="/../assets/bound.webp"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Partnerbanner;
