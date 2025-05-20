import { Link } from "react-router-dom";

const ChoosePage = () => {
  const cards = [
    { name: "Student", logo: "/student.png", path: "/login" },
    { name: "Teacher", logo: "/teacher.png", path: "/login" },
    // { name: "Guest", logo: "/guest.png", path: "/login" },
  ];

  return (
    <>
      <div className="relative">
        <img
          className="w-full h-28 sm:h-36 md:h-40 lg:h-52"
          src="/curve.png"
          alt="curve"
        />

        <div className="absolute top-10 md:top-14 lg:top-24 left-1/2 transform -translate-x-1/2 w-24 lg:w-52 h-24 lg:h-52 bg-white rounded-full border-4 border-[#28C2A0] shadow-lg flex flex-col items-center justify-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-16 lg:w-36 h-16 lg:h-36 mb-2"
          />
        </div>
      </div>

      <div className="flex flex-col mt-28 items-center">
        <h3 className="font-bold text-[#0C46C4]">Choose your option</h3>
        <div className="flex gap-3 lg:gap-6 mt-4">
          {cards.map((data, index) => (
            <Link to={data.path} key={index}>
              <div className="w-24 lg:w-44 h-24 lg:h-36 p-4 border bg-[#0C46C4] text-white rounded-xl shadow-md flex flex-col items-center">
                <img src={data.logo} alt={data.name} className="w-10 lg:w-20 h-10 lg:h-20 mb-2" />
                <span className="font-semibold">{data.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChoosePage;
