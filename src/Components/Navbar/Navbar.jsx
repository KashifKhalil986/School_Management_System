import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [

        { name: "Add Student", path: "/add-student" },
        { name: "Homework", path: "/home-work" },
        { name: "Attendance", path: "/attendance" },
        { name: "Result", path: "" },
        { name: "Solution", path: "" },
        { name: "Events", path: "" },
    ];



    return (
        <>
            <nav className="bg-[#28C2A0] text-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="w-20 h-20 rounded-full bg-white">
                        <img className="w-16 h-16 mx-auto m-1" src="./logo.png" alt="" />
                    </div>

                    <div className="hidden md:flex lg:flex gap-6 text-xl">
                        {menuItems.map((item, index) => (
                            <Link to={item.path}>
                                <a key={index} className="hover:underline">
                                    {item.name}
                                </a>
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <FontAwesomeIcon icon={faUserCircle} className="text-4xl" />

                        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <FontAwesomeIcon icon={faTimes} className="text-xl" /> : <FontAwesomeIcon icon={faBars} className="text-xl" />}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden bg-[#28C2A0] px-4 pb-4 flex flex-col gap-2">
                        {menuItems.map((item, index) => (
                            <a key={index} href="#" className="py-1 border-b border-white/20 hover:text-[#28C2A0]">
                                {item.name}
                            </a>
                        ))}
                    </div>
                )}
            </nav>

         
        </>

    );
};


export default Navbar
