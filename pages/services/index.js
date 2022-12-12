import Breadcrumb from "../../Components/Services/BreadCrumb/Breadcrumb";
import EmployerServicesBanner from "../../Components/Services/EmployerServicesBanner/EmployerServicesBanner";
import EmployerServicesInfo from "../../Components/Services/EmployerServicesInfo/EmployerServicesInfo";
import LearnMore from "../../Components/Services/LearnMore/LearnMore";

const index = () => {
  return (
    <div>
      <EmployerServicesBanner />
      <Breadcrumb />
      <EmployerServicesInfo />
      <LearnMore />
    </div>
  );
};

export default index;
