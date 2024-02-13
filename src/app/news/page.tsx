import React from "react";
import Newbanner from "../components/Newbanner";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "NEWS | YUNIGE WORLD CLASS TRAVEL",
};
const page = () => {
  return (
    <div>
      <Newbanner />
    </div>
  );
};

export default page;
