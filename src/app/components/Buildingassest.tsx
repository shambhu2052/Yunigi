import React from "react";
interface buildingtype {
  iconsrc: string;
  title: string;
  description: string;
}
const buildingassets = [
  {
    iconsrc: "/../assets/serviceicon1.svg",
    title: "variety of choices",
    description:
      "Japan's income real estate market is diverse and has a wealth of options. From urban areas to rural areas, you can choose properties that suit your needs.",
  },
  {
    iconsrc: "/../assets/serviceicon2.svg",
    title: "stable market",
    description:
      "The Japanese real estate market is stable and is expected to grow in the future. It is attracting attention as a solid investment destination.",
  },
  {
    iconsrc: "/../assets/serviceicon3.svg",
    title: "expert support",
    description:
      "We have experts who are familiar with the Japanese market, and we provide total support from property research to contract conclusion and acquisition process.",
  },
  {
    iconsrc: "/../assets/serviceicon4.svg",
    title: "Transparent, legally secure transactions",
    description:
      "Real estate transactions in Japan are transparent, legal and safe. Investor protection is strong and the real estate acquisition process is reliable",
  },
];
const Business = [
  {
    iconsrc: "/../assets/serviceicon5.svg",
    title: "Diverse business options",
    description:
      "There are various business options in the Japanese food and beverage industry. We find the right business for our clients and support them in the successful acquisition process.",
  },
  {
    iconsrc: "/../assets/serviceicon6.svg",
    title: "Advice in line with market trends",
    description:
      "We are well-versed in the trends and dynamics of the Japanese food and beverage market and can recommend appropriate strategies for successful acquisitions..",
  },
  {
    iconsrc: "/../assets/serviceicon7.svg",
    title: "Smooth acquisition process",
    description:
      "We provide support to smoothly proceed with the process from property selection to negotiation and contract conclusion..",
  },
  {
    iconsrc: "/../assets/serviceicon8.svg",
    title: "respect for local culture",
    description:
      "Japan's food and beverage industry has its own unique culture and customs. We respect these and help our clients integrate their businesses into local markets..",
  },
];
const Buildingassest = () => {
  return (
    <div className="max-[1180px] container mx-auto px-4 md:px-4 py-[50px]">
      <div className="max-w-[850px] mx-auto">
        <div className="flex items-center justify-center">
          <div className="w-[70px] h-[4px] bg-[#ED514E]"></div>
        </div>
        <h3 className="font-bold text-3xl text-[#333333] pt-5 text-center">
          For those thinking of building assets in Japan
        </h3>
        <p className="font-medium text-base text-[#333333] pt-6  text-center">
          We have a team of experts who are familiar with the Japanese real
          estate market and financial products, and will support you in building
          long-term assets.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 md:gap-0 justify-between my-5 bg-[#F4F4F4] max-w-[1050px] mx-auto p-8 rounded-md">
        <div className="w-full md:basis-[40%]">
          <div className="w-[70px] h-[3px] bg-[#ED514E]"></div>

          <h2 className="pt-2 font-bold text-[26px] text-[#ED514E]">
            Real Estate Investment
          </h2>
          <p className="pt-5 font-medium text-base leading-[33px] text-[#333333] text-justify">
            Profitable real estate investment in Japan has attractive features.
            We offer a wide range of proposals to foreigners about the
            possibilities of building assets in this unique market. The
            following are the features of real estate investment in Japan.
          </p>
        </div>
        <div className="w-full md:basis-[55%] grid grid-cols-1 md:grid-cols-2 gap-5">
          {buildingassets?.map((val: buildingtype, index: number) => {
            return (
              <div
                className="rounded-md p-3 flex flex-col gap-3 items-center bg-white text-[#333333] shadow-xl"
                key={index}
              >
                <img src={val?.iconsrc} alt="icon of buildingassets" />
                <h2 className="font-bold text-base leading-[27px] ">
                  {val?.title}
                </h2>
                <p className="font-normal text-base leading-[26px] text-justify">
                  {val?.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex  flex-wrap flex-row-reverse gap-3 md:gap-0 justify-between my-7 bg-[#F4F4F4] max-w-[1050px] mx-auto p-8 rounded-md">
        <div className="w-full md:basis-[40%]">
          <div className="w-[70px] h-[3px] bg-black"></div>

          <h2 className="pt-2 font-bold text-[26px] text-black">
            Business acquisition <br /> (M&A)
          </h2>
          <p className="pt-5 font-medium text-base leading-[33px] text-[#333333] text-justify">
            When developing business in Japan, acquiring businesses in the food
            and beverage industry is one of the proactive means of building
            assets. We provide business acquisition services for those who want
            to own a restaurant or become a business owner.
          </p>
        </div>
        <div className="w-full md:basis-[55%] grid grid-cols-1 md:grid-cols-2 gap-5">
          {Business?.map((val: buildingtype, index: number) => {
            return (
              <div
                className="rounded-md p-3 flex flex-col gap-3 items-center bg-white text-[#333333] shadow-xl"
                key={index}
              >
                <img src={val?.iconsrc} alt="icon of buildingassets" />
                <h2 className="font-bold text-base leading-[27px] ">
                  {val?.title}
                </h2>
                <p className="font-normal text-base leading-[26px] text-justify">
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

export default Buildingassest;
