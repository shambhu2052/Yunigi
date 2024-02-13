import React from "react";
import Contactbanner from "../components/contact/Contactbanner";
import Contactform from "../components/contact/Contactform";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "CONTACT | YUNIGE WORLD CLASS TRAVEL",
};
const page = () => {
  return (
    <div>
      <Contactbanner />
      <Contactform />
    </div>
  );
};

export default page;
