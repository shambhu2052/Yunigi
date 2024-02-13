import React from "react";
interface investmenttype {
  iconsrc: string;
  title: string;
  description: string;
}
const investmentitems = [
  {
    iconsr: "/../assets/investment1.svg",
    title: "Compatibility with foreign investors",
    description:
      "In Japan, there are fewer legal restrictions for foreigners to purchase real estate, and there are fewer additional taxes and strict restrictions than in other countries, making it an easy real estate investment market for foreigners to enter.",
  },
  {
    iconsr: "/../assets/investment2.svg",
    title: "Impact of weak yen",
    description:
      "If the yen continues to be weak, Japanese real estate prices will appear low from an overseas perspective, making Japan an attractive investment destination. This is a factor that creates conditions that make it easier for foreign investors to purchase.      ",
  },
  {
    iconsr: "/../assets/investment3.svg",
    title: "high yield",
    description:
      "Compared to Asian countries, the Japanese real estate market is said to offer relatively high yields. This suggests that the rental market is stable and has the potential to generate attractive returns for investors.",
  },
];
const Investment = () => {
  return (
    <div className="investmentimage h-full md:h-[100vh] py-9 px-4 md:px-0">
      <div className="max-w-[1180px] container mx-auto">
        <h3 className="text-white font-bold text-xl text-center">
          Why real estate investment in Japan is popular
        </h3>
        <p className="font-normal text-base text-white pt-6 text-center">
          Japan is one of the countries with relatively little political
          instability or rapid social change.
        </p>
        <p className="font-normal text-base text-white pt-3 text-center">
          This makes it difficult for large fluctuations to occur in the real
          estate market, reducing investment risk.
        </p>
        <div className="max-w-[900px] mx-auto bg-white my-10 p-5 rounded-md flex flex-wrap gap-3 md:gap-0 justify-between ">
          {investmentitems?.map((val: any, index: number) => {
            const isLastItem = index === investmentitems.length - 1;
            return (
              <div
                className={`p-3 flex flex-col gap-3 items-center w-full md:basis-[32%] ${
                  isLastItem
                    ? ""
                    : "border-b-[1px] md:border-r-[1px] border-solid border-[#ed514e]"
                } `}
                key={index}
              >
                <img src={val?.iconsr} alt="image of icons" />
                <h3 className="font-bold text-xl text-[#ed514e]">
                  {val?.title}
                </h3>
                <p className="font-normal text-base text-[#333333]">
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

export default Investment;
