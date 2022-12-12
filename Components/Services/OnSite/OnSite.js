import React from "react";

const OnSite = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://trustcarehealth.com/uploads/on-site-services-banner.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "350px",
        width: "100%",
        opacity: 0.9,
      }}
      className="flex items-center"
    >
      <div className=" w-10/12 mx-auto ">
        <h3 className="md:text-5xl text-3xl font-bold text-gray-700">
          On Site Services
        </h3>
      </div>
    </div>
  );
};

export default OnSite;
