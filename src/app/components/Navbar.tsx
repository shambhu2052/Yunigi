"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Drawers from "./Drawers";
interface Linktype {
  Linkname: string;
  Linkhref: string;
}
const LinkItems = [
  {
    Linkname: "Top",
    Linkhref: "/",
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
  const [selectedlink, setSelectedlink] = useState<number>(0);
  const [isfixed, setIsfixed] = useState<boolean>(false);
  // useEffect(() => {
  //   function handleScroll() {
  //     if (window.scrollY >= 100) {
  //       setIsfixed(true);
  //     } else {
  //       setIsfixed(false);
  //     }
  //   }

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const stickyTop = () => {
    if (window.scrollY >= 100) {
      setIsfixed(true);
    } else {
      setIsfixed(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", stickyTop);
  }

  const handleclick = (index: number) => {
    setSelectedlink(index);
  };
  return (
    <>
      <div className="md:hidden block fixed top-0 z-50 w-full">
        <div className=" relative">
          <div className="w-[200px]  h-[70px] bg-[#ED514E] top-0 left-0 absolute z-20 rounded-br-[10rem]"></div>
          <div className="flex items-center justify-between px-4 z-50 w-full">
            <div className="basis-[40%] z-40">
              <h2 className="font-bold text-xl uppercase text-white pt-3">
                yunige
              </h2>
              <p className="uppercase font-normal  text-[7px] white-space-pre font-sans text-white">
                World Class Travels & Real Estate
              </p>
            </div>
            <div className="basis-[30%] z-40 flex justify-end">
              <Drawers />
            </div>
          </div>
        </div>
      </div>
      <div
        className={` w-full ${isfixed ? "nav" : ""} absolute md:block hidden`}
      >
        <div className={`py-8  relative`}>
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
                const activelink = selectedlink === index;
                return (
                  <Link
                    href={val?.Linkhref}
                    key={index}
                    className={`${
                      isfixed ? "text-black" : "text-white"
                    } font-sans ${
                      activelink
                        ? "border-b-2 border-solid border-[#ED514E]"
                        : ""
                    } `}
                    onClick={() => handleclick(index)}
                  >
                    {val.Linkname}
                  </Link>
                );
              })}
              <Link
                href="/partner"
                className={`border-[1px] flex items-center justify-between border-solid   p-2 ${
                  isfixed
                    ? "text-black border-black"
                    : "text-white border-white"
                }  max-w-[180px] font-medium text-sm`}
              >
                Partner for japanese companies
                <div className="w-[15px] h-[11px] bg-[#BC002D] rounded-[50%]"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
