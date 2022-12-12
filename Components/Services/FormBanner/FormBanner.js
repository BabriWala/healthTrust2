const FormBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://trustcarehealth.com/uploads/forms-banner.jpg")`,
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
        <h3 className="md:text-5xl text-3xl font-bold text-gray-100">Forms</h3>
      </div>
    </div>
  );
};

export default FormBanner;
