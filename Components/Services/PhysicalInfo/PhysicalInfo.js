import { FaQuoteLeft } from "react-icons/fa";
import SideServiceInfo from "../SideServiceInfo/SideServiceInfo";
const PhysicalInfo = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto flex lg:flex-cols-2 md:flex-cols-1 flex-cols-1 py-10">
        <div className="w-2/3">
          <div className="w-11/12">
            <p className="text-base font-medium mb-5 text-gray-500">
              Federal law requires drivers of commercial motor vehicles (CMVs)
              to receive regular physical examinations under the Department of
              Transportation. DOT physicals are highly regulated for the
              driver’s safety and are designed to detect physical, mental, and
              emotional issues that can affect a driver’s ability to safely
              drive a commercial vehicle.
            </p>
            <p className="text-base font-medium mb-5 text-gray-500">
              At our TrustCare locations our DOT medical examiners are specially
              trained to understand the regulations and prevent drivers from
              being inappropriately disqualified. We offer DOT physicals at all
              our urgent care locations, but we recommend that you call ahead to
              verify the DOT medical examiner is onsite that day.
            </p>
            <p className="text-base font-medium mb-5 text-gray-500">
              For larger groups in need of multiple physicals, please contact
              our employer services division at{" "}
              <span style={{ color: "#3FC2CD" }}>
                employers@trustcarehealth.com
              </span>
              .
            </p>
          </div>
          <h3 style={{ color: "#3FC2CD" }} className="text-2xl font-medium">
            What our partners have to say:
          </h3>
          <div className="w-11/12 border-b-2 border-gray-400 mt-3"></div>

          <div className="w-10/12 mx-auto mt-10">
            <p className="bg-gray-100 py-5 px-5">
              <FaQuoteLeft className="text-xl text-gray-400" />I have been in
              the transportation industry for 30 years and Trust Care is one of
              the most professional groups I have ever had the privilege of
              working with. Their professionalism and genuine care for my
              employees and our company makes for a great relationship. I have
              saved time, money and been able to streamline our process thanks
              to their help and hard work. I could not recommend a better group
              of people or clinic.
            </p>

            <div className="my-3 text-right">
              <i className="text-base font-medium text-black">
                Thomas S. Carter - Director of Driver Recruiting
              </i>
            </div>
          </div>

          <div className="w-10/12 mx-auto mt-10">
            <p className="bg-gray-100 py-5 px-5">
              <FaQuoteLeft className="text-xl text-gray-400" />
              We have been completely satisfied with all aspects of service we
              have received from the exceptional team at TrustCare. They are
              employer-focused and cater to all of our operational needs such as
              drug testing, workers’ compensation and DOT physicals by providing
              excellent customer service throughout the entire process. Whenever
              we need an on-site service such as drug testing, we send a quick
              e-mail and nine times out of ten we get an immediate response.
              They are well-versed in the workers’ compensation arena and can
              coordinate care to the appropriate healthcare provider if further
              care is needed. Overall, they make our operation run smoother
              because they are reliable, trustworthy, friendly and make you feel
              like family. I would recommend them to anyone.
            </p>
            <div className="my-3 text-right">
              <i className="text-base font-medium text-black">
                Chris Fontenot - Two Men & A Truck
              </i>
            </div>
          </div>
        </div>

        <SideServiceInfo />
      </div>
    </div>
  );
};

export default PhysicalInfo;
