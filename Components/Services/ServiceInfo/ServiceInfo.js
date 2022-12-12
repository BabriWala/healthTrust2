import SideServiceInfo from "../../../Components/Services/SideServiceInfo/SideServiceInfo";

const ServiceInfo = () => {
  return (
    <div className="w-10/12 mx-auto flex lg:flex-cols-2 md:flex-cols-1 flex-cols-1 py-20">
      <div className="w-2/3">
        <p className="w-10/12 text-base font-medium text-gray-500">
          TrustCare offers flexible health testing and screening that comes to
          you. Getting employees to meet health testing deadlines is no longer a
          chore. Call us, and we will set up an on site clinic that is
          convenient for your employees’ schedule.
        </p>

        <ul
          style={{ listStyleType: "disc" }}
          className="w-11/12 mx-auto my-5 text-base font-medium"
        >
          <li>Flu Shots</li>
          <li>Fire & Police</li>
          <li>Random Drug Screenings</li>
          <li>School Physicals</li>
          <li>Sports Physicals</li>
          <li>Vaccines – Hep A, Hep B, Tetanus, Titers</li>
          <li>DOT Physicals</li>
          <li>Lunch & Learn Sessions</li>
        </ul>
        <p className="text-base font-medium mb-5">
          We want to partner with you for the essential health and safety of
          your workforce.
        </p>
        <p className="text-base font-medium mb-5 text-gray-500">
          To find out more about our on site services, email us at{" "}
          <span className="text-cyan-500">employers@trustcarehealth.com</span>.
        </p>
      </div>

      <SideServiceInfo />
    </div>
  );
};

export default ServiceInfo;
