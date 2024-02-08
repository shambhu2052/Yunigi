import React from "react";

const Map = () => {
  return (
    <div className="rounded-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27776836158!2d85.284932836971!3d27.709030242079713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1707298045791!5m2!1sen!2snp"
        width="100%"
        height="300"
        loading="lazy"
        className="rounded-md"
      ></iframe>
    </div>
  );
};

export default Map;
