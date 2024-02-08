"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
const Rotateimage = () => {
  const [angle, setAngle] = useState(0);
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const rect = (event.target as HTMLElement).getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const radians = Math.atan2(clientY - centerY, clientX - centerX);
      const degrees = (radians * 45) / Math.PI;
      setAngle(degrees);
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      <img
        // width={600}
        // height={400}

        src="/../assets/earth.webp"
        alt="Rotating Image"
        style={{
          transform: `rotate(${angle}deg)`,
          transition: "transform 1s ease-out",
        }}
        // src={
        //   banner && banner[currentIndex]
        //     ? ${banner[currentIndex].attributes?.image?.data?.attributes?.url}
        //     : "defaultImageUrl"
        // }
        className=" h-[105vh] object-cover rounded-b-3xl relative justify-end"
      />
    </div>
  );
};

export default Rotateimage;
