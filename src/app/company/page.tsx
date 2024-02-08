import React from "react";
import Companybanner from "../components/company/Companybanner";
import Companydetail from "../components/company/Companydetail";
import Companyaddress from "../components/company/Companyaddress";

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
