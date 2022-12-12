const OccupationalBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://trustcarehealth.com/uploads/work-comp-occ-med-banner.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "350px",
        width: "100%",
        // opacity: 0.9,
      }}
      className="flex items-center"
    >
      <div className="w-10/12 mx-auto ">
        <h3 className="md:text-5xl text-3xl font-bold text-gray-700">
          Occupational Medicine and <br /> Workers’ Compensation
        </h3>
      </div>
    </div>
  );
};

export default OccupationalBanner;
