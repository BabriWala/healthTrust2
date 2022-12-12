import SideServiceInfo from "../SideServiceInfo/SideServiceInfo";

const FormCard = () => {
  return (
    <div className="w-10/12 mx-auto flex lg:flex-cols-2 md:flex-cols-1 flex-cols-1 py-10">
      <div className="w-2/3">
        <p className="text-base font-medium mb-5 text-gray-500">
          Below are available forms for employers. Please fill out and submit to{" "}
          <span className="text-cyan-500">employers@trustcarehealth.com</span>.
        </p>
        <div className="w-11/12 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mt-14">
          <div className=" text-center py-10 px-10 bg-gray-100">
            <h3 className="text-xl font-medium">
              Occupational Medicine Intake
            </h3>
            <button
              style={{ backgroundColor: "#3FC2CD" }}
              className="py-3 px-6 text-white my-6"
            >
              Download
            </button>
          </div>

          <div className="text-center py-10 px-10 bg-gray-100">
            <h3 className="text-xl font-medium">
              Workers’ Compensation Intake
            </h3>
            <button
              style={{ backgroundColor: "#3FC2CD" }}
              className="py-3 px-6 text-white my-6"
            >
              Download
            </button>
          </div>

          <div className="text-center py-10 px-10 bg-gray-100">
            <h3 className="text-xl font-medium">Employer Profile</h3>
            <button
              style={{ backgroundColor: "#3FC2CD" }}
              className="py-3 px-6 text-white my-6"
            >
              Download
            </button>
          </div>

          <div className="text-center py-10 px-10 bg-gray-100">
            <h3 className="text-xl font-medium">On Site Event Agreement</h3>
            <button
              style={{ backgroundColor: "#3FC2CD" }}
              className="py-3 px-6 text-white my-6 "
            >
              Download
            </button>
          </div>
        </div>
      </div>

      <SideServiceInfo />
    </div>
  );
};

export default FormCard;
