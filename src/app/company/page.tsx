import React from "react";
import Companybanner from "../components/company/Companybanner";
import Companydetail from "../components/company/Companydetail";
import Companyaddress from "../components/company/Companyaddress";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "COMPANY | YUNIGE WORLD CLASS TRAVEL",
};
const page = () => {
  return (
    <div>
      <Companybanner />
      <Companydetail />
      <Companyaddress />
    </div>
  );
};

export default page;
