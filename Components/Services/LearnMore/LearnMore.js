import React from "react";

const LearnMore = () => {
  return (
    <section className=" py-6 bg-cyan-300 text-gray-50">
      <div className="w-11/12 ">
        <div
          style={{
            backgroundImage: `url("https://trustcarehealth.com/assets/images/cta-brand-bg.svg")`,
            backgroundPosition: "center left",
            backgroundRepeat: "no-repeat",
          }}
          className="w-11/12 mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:flex-row lg:space-y-0 lg:justify-between"
        >
          <div>
            {" "}
            <h1
              style={{ color: "#192857" }}
              className="text-3xl font-bold  text-center lg:text-left mb-3"
            >
              Membership with all the bells and whistles.
            </h1>
            <div className="border-b-2 border-red-500 w-10 mb-3"></div>
            <p className="w-3/4 font-medium" style={{ color: "#192857" }}>
              Introducing TrustCare+. Priority access to any clinic. Text with
              our Care Team from anywhere. Sound too good to be true? Check it
              out!
            </p>
          </div>
          <button
            style={{ backgroundColor: "#192857" }}
            className=" py-5 px-10 text-white text-xl"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
