import { FaQuoteLeft } from "react-icons/fa";
import SideServiceInfo from "../SideServiceInfo/SideServiceInfo";

const EmployerServicesInfo = () => {
  return (
    <div className="w-10/12 mx-auto flex lg:flex-cols-2 md:flex-cols-1 flex-cols-1 py-10">
      <div className="w-2/3">
        <div className="w-11/12">
          <p className="text-base font-medium mb-5 text-gray-500">
            Our Employer Services team partners with companies to help keep
            workforces healthy and productive. Our suite of employer health
            services helps create a culture of well-being. We ensure employees
            receive care at the most convenient and appropriate treatment level,
            which helps reduce overall healthcare costs.
          </p>
          <p className="text-base font-medium mb-5 text-gray-500">
            Our providers know how to effectively balance patient advocacy with
            the overall business concerns of the employer. We do this by making
            sure we are familiar with your workplace, understanding your
            regulatory constraints and learning your objectives.
          </p>
          <p className="text-base font-medium mb-5 text-gray-500">
            Our providers will come to your workplace and tour your facility to
            become familiar with the work environment and the tasks that your
            employees perform.
          </p>
          <p>
            Our main objective is to return your employees back to work within a
            reasonable time frame based on the nature of the injury.
          </p>
        </div>

        <h3 style={{ color: "#3FC2CD" }} className="text-xl font-medium mt-5">
          Why should you choose a qualified Occupational Health Provider like
          TrustCare?
        </h3>
        <div className="w-11/12 border-b-2 border-gray-400 my-3"></div>

        <div className="my-5">
          <ul
            style={{ listStyleType: "disc" }}
            className="w-11/12 mx-auto my-5 text-sm font-medium"
          >
            <li>
              We pride ourselves on efficiency. Our door to door time is
              typically 1 hour or less.
            </li>
            <li>
              We have extended business hours including nights and weekends.
            </li>
            <li>
              TrustCare has a dedicated workers’ comp coordinator. Our
              coordinator is your single point of contact, acting on your behalf
              to expedite services, manage cases, handle communications and
              serve as a liaison. We make it seamless—which makes everyone’s job
              easier.
            </li>
            <li>
              Our success is built on personal relationships. Our team is
              available to answer your questions or walk you through the
              process.
            </li>
            <li>
              We provide all services under one roof so your employee is not
              bouncing around multiple clinics.
            </li>
            <li>We have certified DOT providers at all locations.</li>
            <li>
              We provide all services under one roof so your employee is not
              bouncing around multiple clinics.
            </li>
          </ul>
        </div>

        <h3 style={{ color: "#3FC2CD" }} className="text-2xl font-medium mt-6">
          What our partners have to say:
        </h3>
        <div className="w-11/12 border-b-2 border-gray-400 mt-3"></div>

        <div className="w-10/12 mx-auto mt-10">
          <p className="bg-gray-100 py-5 px-5">
            <FaQuoteLeft className="text-xl text-gray-400" />I have been in the
            transportation industry for 30 years and Trust Care is one of the
            most professional groups I have ever had the privilege of working
            with. Their professionalism and genuine care for my employees and
            our company makes for a great relationship. I have saved time, money
            and been able to streamline our process thanks to their help and
            hard work. I could not recommend a better group of people or clinic.
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
            e-mail and nine times out of ten we get an immediate response. They
            are well-versed in the workers’ compensation arena and can
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
  );
};

export default EmployerServicesInfo;
