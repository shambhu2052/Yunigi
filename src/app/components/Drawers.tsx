import React, { useState } from "react";
import { Drawer } from "antd";
import { FaBars } from "react-icons/fa";
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
const Drawers = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="" onClick={showDrawer}>
        <FaBars size={30} className="text-black" />
      </div>
      <Drawer onClose={onClose} open={open}>
        <div className="flex flex-col gap-2 pl-2">
          <h2 className="font-bold text-3xl uppercase text-[#333333]">
            yunige
          </h2>
          <p className="uppercase font-normal  text-[7px] white-space-pre font-sans text-[#333]">
            World Class Travels & Real Estate
          </p>
          <p className="pt-2 font-semibold text-base text-[#333333] max-w-[250px] ">
            Total Support for business negotitation and travel in Japan
          </p>
          {LinkItems?.map((val: Linktype, index: number) => {
            return (
              <Link
                href={val?.Linkhref}
                key={index}
                className="font-normal text-base text-black"
              >
                {val?.Linkname}
              </Link>
            );
          })}
          <Link
            href="/partner"
            className={`border-[1px] flex items-center justify-between border-solid   p-2
                  
                    text-[#333333] border-[#333333] max-w-[180px] font-medium text-sm`}
          >
            Partner for japanese companies
            <div className="w-[15px] h-[11px] bg-[#BC002D] rounded-[50%]"></div>
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default Drawers;
