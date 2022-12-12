import React from "react";

const SideServiceInfo = () => {
  return (
    <div className="w-1/3">
      <h3 className="py-5 px-8 text-left bg-gray-800 text-xl font-medium  text-white">
        Employer Services
      </h3>
      <div style={{ backgroundColor: "#3FC2CD" }}>
        <div className="py-5 px-8 text-left">
          <a
            className="text-base font-medium text-white hover:text-black"
            href="/"
          >
            Direct Primary Care For Business
          </a>
          <div className="border-b-2 border-gray-200 mt-3"></div>
        </div>

        <div className=" px-8 text-left">
          <a
            className="text-base font-medium text-white hover:text-black"
            href="/"
          >
            On Site Services
          </a>
          <div className="border-b-2 border-gray-200 mt-3"></div>
        </div>

        <div className="py-5 px-8 text-left">
          <a
            className="text-base font-medium text-white hover:text-black"
            href="/"
          >
            DOT Physicals
          </a>
          <div className="border-b-2 border-gray-200 mt-3"></div>
        </div>

        <div className=" px-8 text-left">
          <a
            className="text-base font-medium text-white hover:text-black"
            href="/"
          >
            Occupational Medicine/Workers’ Compensation
          </a>
          <div className="border-b-2 border-gray-200 mt-3"></div>
        </div>

        <div className="py-5 px-8 text-left">
          <a
            className="text-base font-medium text-white hover:text-black"
            href="/"
          >
            Forms
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideServiceInfo;
