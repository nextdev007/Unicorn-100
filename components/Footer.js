import React from "react";

const Footer = () => {
  return (
    <div className=" w-full bg-black mt-12 text-white h-56 flex items-center justify-center md:gap-72 gap-4">
      {/* Letf div */}
      <div className=" md:gap-20 ">
        <p>PRIVACY POLICY</p>
        <p>Documentation</p>
      </div>

      {/* Right div */}
      <div className="md:gap-20">
        <p>Copyright</p>
        <p>Contact: 7071853247</p>
      </div>
    </div>
  );
};

export default Footer;
