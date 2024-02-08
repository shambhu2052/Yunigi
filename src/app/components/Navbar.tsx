import React from "react";
import Link from "next/link";
interface Linktype {
  Linkname: string;
  Linkhref: string;
}
const LinkItems = [
  {
    Linkname: "Top",
    Linkhref: "",
  },
  {
    Linkname: "Services",
    Linkhref: "/service",
  },
  {
    Linkname: "Partner",
    Linkhref: "/partner",
  },
  {
    Linkname: "News",
    Linkhref: "/news",
  },
  {
    Linkname: "Company",
    Linkhref: "/company",
  },
  {
    Linkname: "Contact",
    Linkhref: "/contact",
  },
];
const Navbar = () => {
  return (
    <div className="absolute w-full">
      <div className="py-8 relative">
        <div className="w-[460px] 2xl:w-[667px] h-[150px] bg-[#ED514E] top-0 left-0 absolute z-20 rounded-br-[10rem]"></div>
        <div className=" container mx-auto flex justify-between  items-center">
          <div className="basis-[30%] flex items-center gap-4 z-40">
            <div>
              <h2 className="font-bold text-4xl uppercase text-white">
                yunige
              </h2>
              <p className="uppercase font-normal text-[8px] white-space-pre font-sans text-white">
                World Class Travels & Real Estate
              </p>
            </div>
            <p className="font-normal text-sm font-sans text-white">
              Total Support for business negotitation and travel in japan
            </p>
          </div>
          <div className="basis-[65%] flex items-center justify-between z-50">
            {LinkItems.map((val: Linktype, index: number) => {
              return (
                <Link
                  href={val?.Linkhref}
                  key={index}
                  className="text-white font-sans "
                >
                  {val.Linkname}
                </Link>
              );
            })}
            <Link
              href="/partner"
              className="border-[1px] flex items-center justify-between border-solid border-white  p-2 text-white max-w-[180px] font-medium text-sm"
            >
              Partner for japanese companies
              <div className="w-[15px] h-[11px] bg-[#BC002D] rounded-[50%]"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
