import React from "react";
import Homeimage from "./Homeimage";
import Imageslides from "./Imageslides";

const Sight2 = () => {
  return (
    <div className="w-full relative">
      <img src="/../assets/servicebg.webp" className="w-full h-[400px]" />
      <div className="absolute top-[-38%] left-[3%] 2xl:left-[17%]">
        <Imageslides />
      </div>
    </div>
  );
};

export default Sight2;
