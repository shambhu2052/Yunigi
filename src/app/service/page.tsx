import React from "react";
import Servicebanner from "../components/Servicebanner";
import Feature from "../components/Feature";
import Buildingassest from "../components/Buildingassest";
import Touristspot from "../components/Touristspot";
import Sight2 from "../components/Sight2";
import Sightsheeting from "../components/Sightsheeting";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "SERVICE | YUNIGE WORLD CLASS TRAVEL",
};
const page = () => {
  return (
    <div>
      <Servicebanner />
      <Feature />
      <Buildingassest />
      <Touristspot />
      <Sightsheeting />
      <Sight2 />
    </div>
  );
};

export default page;
