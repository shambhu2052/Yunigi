import React from "react";
interface businesstype {
  iconsrc: string;
  title: string;
  description: string;
}
const advantage = [
  {
    iconsrc: "/../assets/a1.svg",
    title: "Developing new customer",
    description:
      "Through our travel plans, you can attract new foreign tourists.",
  },
  {
    iconsrc: "/../assets/a2.svg",
    title: "professional support ",
    description:
      "We specialize in inbound travel and have the know-how to respond to the unique needs and requests of foreign tourists.",
  },
];
const Industries = [
  {
    iconsrc: "/../assets/in1.svg",
    title: "Hotel",
    description:
      "Businesses that provide accommodation facilities such as hotels, inns, and guesthouses.",
  },
  {
    iconsrc: "/../assets/in2.svg",
    title: "Restaurant",
    description: "Restaurants and cafes that offer Japanese food culture.",
  },
];
const Businessalliance = () => {
  return (
    <div>
      <div className="2xl:max-w-[1180px] container mx-auto py-5 flex flex-wrap gap-3 md:gap-0 md:justify-between px-4 md:px-0">
        <div className="w-full md:basis-[47%]">
          <h2 className="text-center font-bold text-2xl text-[#333333]">
            Advantage of <br /> business alliance
          </h2>
          <div className="flex items-center justify-center">
            <div className="bg-[#ED514E]  h-[3px] mt-2 w-[207px]"></div>
          </div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            {advantage?.map((val: businesstype, index: any) => {
              return (
                <div className="bg-[#F2E9E4] rounded-md p-3" key={index}>
                  <div className="flex justify-around items-center">
                    <img src={val.iconsrc} alt="icons" />
                    <h2 className="font-bold text-[18px] text-[#333333]">
                      {val?.title}
                    </h2>
                  </div>
                  <p className="pt-3 font-normal text-base text-[#333333]">
                    {val?.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="bg-[#F2E9E4] rounded-md p-3 w-full mt-4">
            <div className="flex justify-around items-center">
              <img src="/../assets/a3.svg" alt="icons" />
              <h2 className="font-bold text-[18px] text-[#333333]">
                Mutual promotion/advertisement
              </h2>
            </div>
            <p className="pt-3 font-normal text-base text-[#333333]">
              By partnering with us, you will be able to advertise overseas,
              creating a synergistic effect on attracting customers.
            </p>
          </div>
        </div>
        <div className="w-full md:basis-[47%]">
          <h2 className="text-center font-bold text-2xl text-[#333333]">
            Industries that can <br /> be partnered with
          </h2>
          <div className="flex items-center justify-center">
            <div className="bg-[#333333]  h-[3px] mt-2 w-[207px]"></div>
          </div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            {Industries?.map((val: businesstype, index: any) => {
              return (
                <div className="bg-[#F4F4F4] rounded-md p-3" key={index}>
                  <div className="flex justify-around items-center">
                    <img src={val.iconsrc} alt="icons" />
                    <h2 className="font-bold text-[18px] text-[#333333]">
                      {val?.title}
                    </h2>
                  </div>
                  <p className="pt-3 font-normal text-base text-[#333333]">
                    {val?.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="bg-[#F4F4F4] rounded-md p-3 w-full mt-4">
            <div className="flex gap-7 md:gap-0 md:justify-around items-center">
              <img src="/../assets/in3.svg" alt="icons" />
              <h2 className="font-bold text-[18px] text-[#333333]">
                Activity/ leisure service provider
              </h2>
            </div>
            <p className="pt-3 font-normal text-base text-[#333333]">
              Business operators that provide services such as activities at
              tourist destinations, sightseeing tours, and Japanese cultural
              experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Businessalliance;
