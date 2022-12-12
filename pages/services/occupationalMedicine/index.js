import OccupationalBanner from "../../../Components/Services/OccupationalMedicine/OccupationalMedicine";
import Breadcrumb from "../../../Components/Services/BreadCrumb/Breadcrumb";
import LearnMore from "../../../Components/Services/LearnMore/LearnMore";
import OccupationalInfo from "../../../Components/Services/OccupationalInfo/OccupationalInfo";

const OccupationalMedicine = () => {
  return (
    <div>
      <OccupationalBanner />
      <Breadcrumb />
      <OccupationalInfo />
      <LearnMore />
    </div>
  );
};

export default OccupationalMedicine;
