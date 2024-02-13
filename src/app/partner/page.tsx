import React from "react";
import Partnerbanner from "../components/Partnerbanner";
import Businessalliance from "../components/Businessalliance";
import Partnership from "../components/Partnership";
import Partnerstep from "../components/Partnerstep";
import Realsale from "../components/Realsale";
import Investment from "../components/Investment";
import Salesupport from "../components/Salesupport";
import Rotateimage from "../components/Rotateimage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "PARTNER | YUNIGE WORLD CLASS TRAVEL",
};
const page = () => {
  return (
    <div>
      <Partnerbanner />
      <Businessalliance />
      <Partnership />
      <Partnerstep />
      <Realsale />
      <Investment />
      <Salesupport />
    </div>
  );
};

export default page;
