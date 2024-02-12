"use client";
import React from "react";
import { useFormik,ErrorMessage } from "formik";

const Contactform = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstname: "",
      lastname: "",
      address: "",
      mobilenumber: "",
      description: "",
      domestic: "",
      inquiry: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="py-7 bg-[#F2E9E4]">
      <div className="max-w-[900px] mx-auto ">
        <div className="flex gap-4 ">
          <div className="w-[300px] h-[2px] bg-[#ED514E]"></div>
          <div>
            <h2 className="font-bold text-xl text-[#ed514e]">contact</h2>
            <h2 className="font-bold text-sm text-[#333333] py-8">Inquiry</h2>
            <p className="font-medium text-sm text-[#333333] py-3 text-justify">
              We provide total support to overseas businesses considering
              expanding into the Japanese market. If you have any questions or
              consultation regarding business or tourism, please feel free to
              contact us. We also provide a wide range of information and
              support regarding the Japanese real estate market. We also accept
              questions and consultations regarding real estate investment.
              Please select the appropriate item from the form below and contact
              us.
            </p>
            <div className="my-8 w-full">
              <form className="flex gap-4" onSubmit={formik.handleSubmit}>
                <div className="flex flex-col gap-3">
                  <label>Overseas/domestic</label>
                  <label>Inquiry field</label>
                  <label className="pt-[68px]">Name</label>
                  <label className="pt-[4px]">Email Address</label>
                  <label className="pt-[9px]">Address</label>
                  <label className="py-[20px]">Telephone</label>
                  <label>Inquiry detail</label>
                </div>
                <div className="flex flex-col gap-3">
                  {" "}
                  <div>
                    <label className="pr-2">
                      <input
                        type="radio"
                        name="domestic"
                        value="abroad"
                        className="pl-1"
                        onChange={formik.handleChange}
                      />
                      Abroad
                    </label>
                    <label className="pr-2">
                      <input
                        type="radio"
                        name="domestic"
                        value="domestic"
                        className="pl-1"
                        onChange={formik.handleChange}
                      />
                      Domestic
                    </label>
                    <label className="pr-2">
                      <input
                        type="radio"
                        name="domestic"
                        value="other"
                        className="pl-1"
                        onChange={formik.handleChange}
                      />
                      Other
                    </label>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <label className="pr-2">
                      <input
                        type="radio"
                        name="inquiry"
                        value=" Those considering enetring the Japnaese market"
                        className="pl-1"
                        onChange={formik.handleChange}
                      />
                      Those considering enetring the Japnaese market
                    </label>
                    <label className="pr-2">
                      <input
                        type="radio"
                        name="inquiry"
                        value=" For those who wish to travel to japan"
                        className="pl-1"
                        onChange={formik.handleChange}
                      />
                      For those who wish to travel to japan
                    </label>
                    <label className="pr-2">
                      <input
                        type="radio"
                        name="inquiry"
                        value="other"
                        className="pl-1"
                        onChange={formik.handleChange}
                      />
                      Those who want to purchase real estate in japan
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="firstname"
                      className="p-2 w-full rounded-md"
                      placeholder="Enter Firstname"
                      onChange={formik.handleChange}
                      value={formik.values.firstname}
                    />
                    <input
                      type="text"
                      name="lastname"
                      className="p-2 w-full rounded-md"
                      placeholder="Enter Lastname"
                      onChange={formik.handleChange}
                      value={formik.values.lastname}
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="email"
                      name="email"
                      className="p-2 w-full outline-none rounded-md"
                      placeholder="Enter email address"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      name="address"
                      className="p-2 w-full outline-none rounded-md"
                      placeholder="Enter  Address"
                      onChange={formik.handleChange}
                      value={formik.values.address}
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="number"
                      name="mobilenumber"
                      className="p-2 w-full outline-none rounded-md"
                      placeholder="Enter Number"
                      onChange={formik.handleChange}
                      value={formik.values.mobilenumber}
                    />
                  </div>
                  <div className="w-full">
                    <textarea
                      className="w-full h-[150px] p-2 "
                      name="description"
                      onChange={formik.handleChange}
                      value={formik.values?.description}
                    ></textarea>
                  </div>
                  <div className="flex justify-between items-center mt-9 w-full">
                    <button className="px-9 py-3 border-[1px] border-solid border-[#ED514E] font-normal text-[#333333] text-base hover:bg-[#ED514E] hover:text-white">
                      send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
