const Breadcrumb = () => {
  return (
    <nav className=" my-3" aria-label="Breadcrumb">
      <ol
        role="list"
        className="w-10/12 mx-auto flex items-center gap-1 text-sm text-gray-600"
      >
        <li>
          <a
            href="#"
            className="block transition text-sm font-medium text-gray-800 hover:text-teal-500"
          >
            {" "}
            Home{" "}
          </a>
        </li>

        <li className="mx-2">|</li>

        <li>
          <a
            href="#"
            className="block transition text-sm font-medium text-gray-800 hover:text-teal-500"
          >
            {" "}
            Employer Services{" "}
          </a>
        </li>

        <li className="mx-2">|</li>

        <li>
          <a
            href="#"
            className="block transition text-sm font-medium text-gray-800 hover:text-teal-500"
          >
            {" "}
            On Site Services{" "}
          </a>
        </li>
      </ol>
      <div className="border-b-2 border-gray-50 mt-3"></div>
    </nav>
  );
};

export default Breadcrumb;
