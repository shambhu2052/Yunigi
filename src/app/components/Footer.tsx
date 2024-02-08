import React from "react";
import Link from "next/link";
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
    Linkhref: "news",
  },
  {
    Linkname: "Company",
    Linkhref: "company",
  },
  {
    Linkname: "Contact",
    Linkhref: "/contact",
  },
];
const Footer = () => {
  return (
    <div className="bg-[#ED514E] py-10">
      <div className="2xl:max-w-[1180px] max-w-[800px] mx-auto">
        <h3 className="font-semibold uppercase text-5xl pt-13 text-center text-white">
          YUNIGE
        </h3>
        <h6 className="text-center font-sans font-normal text-sm text-white">
          World class travel & Real State
        </h6>
        <h3 className="text-center font-normal font-sans text-white text-xl py-12">
          Total Support for business negotiation and travel in japan
        </h3>
        <div className="flex justify-between items-center my-12">
          {LinkItems.map((val: Linktype, index: number) => {
            return (
              <Link
                href={val?.Linkhref}
                key={index}
                className="text-white font-sans uppercase font-medium text-base"
              >
                {val.Linkname}
              </Link>
            );
          })}
        </div>
        <p className="uppercase font-normal text-sm text-center text-white py-7">
          @ 2023 yunige world class Travel & Real Estate co. Ltd
        </p>
      </div>
    </div>
  );
};

export default Footer;
