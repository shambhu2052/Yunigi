"use client";
import React, { useState } from "react";
interface linktype {
  id: number;
  linkname: string;
}
interface imagetype {
  imgsrc: string;
}
const Linkname = [
  {
    id: 1,
    linkname: "Kyoto",
  },
  {
    id: 2,
    linkname: "Osaka",
  },
  {
    id: 3,
    linkname: "Tokyo",
  },
  {
    id: 4,
    linkname: "Okinnawa",
  },
  {
    id: 5,
    linkname: "Hiroshima",
  },
];
const koyota = [
  {
    imgsrc: "/../assets/kyota1.webp",
  },
  {
    imgsrc: "/../assets/kyota2.webp",
  },
  {
    imgsrc: "/../assets/kyota3.webp",
  },
];
const osaka = [
  {
    imgsrc: "/../assets/osaka1.webp",
  },
  {
    imgsrc: "/../assets/osaka2.webp",
  },
  {
    imgsrc: "/../assets/osaka3.webp",
  },
];
const tokyo = [
  {
    imgsrc: "/../assets/tokyo1.webp",
  },
  {
    imgsrc: "/../assets/tokyo2.webp",
  },
  {
    imgsrc: "/../assets/tokyo3.webp",
  },
];
const okinwa = [
  {
    imgsrc: "/../assets/okinwa1.webp",
  },
  {
    imgsrc: "/../assets/okinwa2.webp",
  },
  {
    imgsrc: "/../assets/okinwa3.webp",
  },
];
const ma = [
  {
    imgsrc: "/../assets/ma1.webp",
  },
  {
    imgsrc: "/../assets/ma2.webp",
  },
  {
    imgsrc: "/../assets/ma3.webp",
  },
];
const Touristspot = () => {
  const [selectedlink, setSelectedlink] = useState<number>(1);
  const handleClick = (id: number) => {
    setSelectedlink(id);
    console.log(id);
  };
  return (
    <div className="py-7 2xl:max-w-[1180px] mx-auto container">
      <h2 className="text-center font-bold text-7xl text-[#f4f4f4]">
        SIGHTSEEING SPOT
      </h2>
      <h3 className="font-bold text-3xl text-[#333333] pt-5 text-center">
        Recommended tourist spots
      </h3>
      <p className="text-center pt-9 font-normla text-xl text-[#333333]">
        Japan is a country with a unique culture, landscape, and historical
        sites, and
      </p>
      <p className="text-[#333333] pt-2 text-xl font-normal">
        there are a variety of tourist attractions worth visiting. We will
        introduce tourist spots recommended for overseas business operators.
      </p>
      <div className="max-w-[900px] mx-auto flex items-center justify-between mt-9 mb-5">
        {Linkname?.map((val: linktype, index: number) => {
          const isActive = val?.id === selectedlink;
          return (
            <div
              className={`${
                isActive ? "bg-[#ed514e] text-white" : "text-[#ed514e]"
              } px-10 py-3 rounded-3xl border-[1px] border-solid border-[#ED514E] cursor-pointer font-semibold text-base`}
              onClick={() => handleClick(val?.id)}
            >
              {val?.linkname}
            </div>
          );
        })}
      </div>
      {selectedlink === 1 && (
        <div>
          <div className="grid grid-cols-3 gap-4 max-w-[1050px] mx-auto">
            {koyota?.map((val: imagetype, index: number) => {
              return (
                <div
                  className="group w-full h-[300px] overflow-hidden rounded-md"
                  key={index}
                >
                  <img
                    src={val?.imgsrc}
                    alt="image"
                    className="w-full h-full object-cover group-hover:scale-110 duration-150 rounded-md"
                  />
                </div>
              );
            })}
          </div>
          <p className="font-normal text-base text-[#333333] text-center max-w-[1200px] mx-auto pt-8">
            Kyoto, where you can feel the history and beauty of Japan, is known
            as an ancient capital and is home to beautiful temples and
            traditional tea ceremonies. Historic sites such as Arashiyama Bamboo
            Forest, Kinkaku-ji Temple, and Kiyomizu-dera Temple are attractive..
          </p>
        </div>
      )}
      {selectedlink === 2 && (
        <div>
          <div className="grid grid-cols-3 gap-4 max-w-[1050px] mx-auto">
            {osaka?.map((val: imagetype, index: number) => {
              return (
                <div
                  className="group w-full h-[300px] overflow-hidden rounded-md "
                  key={index}
                >
                  <img
                    src={val?.imgsrc}
                    alt="image"
                    className="w-full h-full object-cover group-hover:scale-110 duration-150 rounded-md"
                  />
                </div>
              );
            })}
          </div>
          <p className="font-normal text-base text-[#333333] text-center max-w-[1200px] mx-auto pt-8">
            Known as Japan's vibrant city, Osaka is famous as a gourmet city,
            offering delicious food and a wide variety of cuisines. Historical
            buildings such as Osaka Castle and Tsutenkaku are also highlights,
            and downtown areas such as Dotonbori and Shinsekai offer a lively
            atmosphere.
          </p>
        </div>
      )}
      {selectedlink === 3 && (
        <div>
          <div className="grid grid-cols-3 gap-4 max-w-[1050px] mx-auto">
            {tokyo?.map((val: imagetype, index: number) => {
              return (
                <div
                  className="group w-full h-[300px] overflow-hidden rounded-md "
                  key={index}
                >
                  <img
                    src={val?.imgsrc}
                    alt="image"
                    className="w-full h-full object-cover group-hover:scale-110 duration-150 rounded-md"
                  />
                </div>
              );
            })}
          </div>
          <p className="font-normal text-base text-[#333333] text-center max-w-[1200px] mx-auto pt-8">
            Tokyo is a diverse and vibrant city, a place where modernity and
            tradition come together in perfect harmony. Historical landmarks and
            modern culture coexist together, such as Asakusa's Nakamise Street
            and Sensoji Temple, and Akihabara's Electric Town. Landmarks such as
            Ueno Park and Tokyo Tower are also worth visiting.
          </p>
        </div>
      )}
      {selectedlink === 4 && (
        <div>
          <div className="grid grid-cols-3 gap-4 max-w-[1050px] mx-auto">
            {okinwa?.map((val: imagetype, index: number) => {
              return (
                <div
                  className="group w-full h-[300px] overflow-hidden rounded-md "
                  key={index}
                >
                  <img
                    src={val?.imgsrc}
                    alt="image"
                    className="w-full h-full object-cover group-hover:scale-110 duration-150 rounded-md"
                  />
                </div>
              );
            })}
          </div>
          <p className="font-normal text-base text-[#333333] text-center max-w-[1200px] mx-auto pt-8">
            Historic places such as Shuri Castle and Shikinaen Garden remind you
            of the old days. In addition, the beautiful sea, blue sky, and
            expansive greenery are the highlights, and the city is also home to
            ancient culture and tradition, with many attractions such as Ryukyu
            dance and the Eisa Festival.
          </p>
        </div>
      )}
      {selectedlink === 5 && (
        <div>
          <div className="grid grid-cols-3 gap-4 max-w-[1050px] mx-auto">
            {ma?.map((val: imagetype, index: number) => {
              return (
                <div
                  className="group w-full h-[300px] overflow-hidden rounded-md "
                  key={index}
                >
                  <img
                    src={val?.imgsrc}
                    alt="image"
                    className="w-full h-full object-cover group-hover:scale-110 duration-150 rounded-md"
                  />
                </div>
              );
            })}
          </div>
          <p className="font-normal text-base text-[#333333] text-center max-w-[1200px] mx-auto pt-8">
            Historical sites such as the Atomic Bomb Dome and Peace Memorial
            Park move visitors with their hopes for peace . Beautiful buildings
            such as the torii gate of Itsukushima Shrine and Hiroshima Castle
            are also part of its charm. Hiroshima is a place that conveys
            memories of the past and hopes for the future, and you can
            experience its beauty and courage.
          </p>
        </div>
      )}
    </div>
  );
};

export default Touristspot;
