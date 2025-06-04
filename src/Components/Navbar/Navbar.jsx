import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { decodeToken } from "../utils/auth";
import { useSelector, useDispatch } from "react-redux";
import { clearToken } from "../../../Slice/AuthSlice";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const user = useSelector((state) => state.auth.user);
    console.log("user data", user)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleToggleDropdown = () => {
        setProfileOpen((prev) => !prev);
    };

    const handleProfile = () => {
        console.log("profile open")
        setProfileOpen(false);


    }

    const handleLogout = () => {
        dispatch(clearToken())
        navigate("/login")

    }

    const menuItems = [

        { name: "Add Class", path: "/add-class" },
        { name: "Add Teacher", path: "/add-teacher" },
        { name: "Add Student", path: "/add-student" },
        { name: "Homework", path: "/home-work" },
        { name: "Attendance", path: "/attendance" },
        { name: "Result", path: "/result" },
        // { name: "Solution", path: "" },
        { name: "Events", path: "/notice" },
    ];

    const location = useLocation();

    const isDashboard = location.pathname === "/dashboard";
    //    const decodedToken = decodeToken();
    //     console.log("decodedToken",decodedToken)
    return (
        <>
            <nav className="bg-[#28C2A0] text-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="w-20 h-20 rounded-full bg-white">
                        <Link to="/dashboard">
                            <img className="w-16 h-16 mx-auto m-1" src="./logo.png" alt="" />
                        </Link>
                    </div>

                    {!isDashboard ? (
                        <div className="hidden md:flex lg:flex gap-6 text-xl">
                            {menuItems.map((item, index) => (
                                <Link to={item.path} key={index}>
                                    <a className="hover:underline">
                                        {item.name}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="">
                            {/* <h3 className="text-xl font-bold">{decodedToken?.userName + " " + decodedToken?.userType.charAt(0).toUpperCase()+ decodedToken?.userType.slice(1)}</h3> */}
                            <h3 className="text-xl font-bold">{user.userName} ({user.userType})</h3>
                        </div>
                    )

                    }

                    <div className="flex items-center gap-4">
                        <div className="relative inline-block text-left">
                            <button onClick={handleToggleDropdown}>
                                <FontAwesomeIcon icon={faUserCircle} className="text-4xl cursor-pointer" />
                            </button>

                            {profileOpen && (
                                <div className="absolute right-0 mt-2 w-40 text-white bg-[#28C2A0] border rounded-md shadow-lg z-50">
                                    <Link
                                        to="/profile"
                                        onClick={handleProfile}
                                        className="block w-full text-left px-4 py-2 cursor-pointer"
                                    >
                                        Profile
                                    </Link>

                                    <button
                                        onClick={handleLogout}
                                        className="block w-full text-left px-4 py-2 cursor-pointer"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>

                        {!isDashboard && (
                            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? (
                                    <FontAwesomeIcon icon={faTimes} className="text-xl" />
                                ) : (
                                    <FontAwesomeIcon icon={faBars} className="text-xl" />
                                )}
                            </button>
                        )}

                    </div>
                </div>

                {isOpen && !isDashboard && (
                    <div className="md:hidden bg-[#28C2A0] px-4 pb-4 flex flex-col gap-2">
                        {menuItems.map((item, index) => (
                            <Link
                                to={item.path}
                                key={index}
                                className="py-1 border-b border-white/20 hover:text-[#28C2A0]"
                            >
                                {item.name}
                            </Link>
                        ))}

                    </div>
                )}
            </nav>


        </>

    );
};


export default Navbar
