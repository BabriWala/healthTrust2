import Link from "next/link";

const SideServiceInfo = () => {
  return (
    <div className="w-1/3">
      <h3 className="py-5 px-8 text-left bg-gray-800 text-xl font-medium  text-white">
        Employer Services
      </h3>
      <div style={{ backgroundColor: "#3FC2CD" }}>
        <div className="py-5 px-8 text-left">
          <Link
            className="text-base font-medium text-white hover:text-black"
            href="/services/onSiteServices"
          >
            On Site Services
          </Link>
          <div className="border-b-2 border-gray-200 mt-3"></div>
        </div>

        <div className=" px-8 text-left">
          <Link
            className="text-base font-medium text-white hover:text-black"
            href="/services/dotPhysicals"
          >
            {" "}
            DOT Physicals
          </Link>
          <div className="border-b-2 border-gray-200 mt-3"></div>
        </div>

        <div className="py-5 px-8 text-left">
          <Link
            className="text-base font-medium text-white hover:text-black"
            href="/services/occupationalMedicine"
          >
            Occupational Medicine/Workers’ Compensation
          </Link>
          <div className="border-b-2 border-gray-200 mt-3"></div>
        </div>

        <div className=" px-8 text-left">
          <Link
            className="text-base font-medium text-white hover:text-black"
            href="/services/forms"
          >
            Forms
          </Link>
          <div className="border-b-2 border-gray-200 mt-3"></div>
        </div>
      </div>
    </div>
  );
};

export default SideServiceInfo;
