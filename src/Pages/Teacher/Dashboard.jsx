import { Link } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"

const Dashboard = () => {
  const dashboard = [
    { name: "Add Class", logo: "./addUser.png", path: "/add-class" },
    { name: "Add Student", logo: "./addUser.png", path: "/add-student" },
    { name: "Add Teacher", logo: "./addUser.png", path: "/add-teacher" },
    { name: "All Teachers", logo: "./addUser.png", path: "/show-all-teachers" },
    { name: "Attendance", logo: "./attendance.png", path: "/attendance" },
    { name: "HomeWork", logo: "./homework.png", path: "/homework" },
    { name: "Result", logo: "./result.png", path: "/result" },
    // {name :"Exam Routine",logo:"./exam.png",path:"/exam-routine"},
    // {name :"Solution",logo:"./solution.png",path:"/solution"},
    { name: "Notice & Event", logo: "./notice.png", path: "/notice-event" },
    // {name :"Add Account",logo:"./addUser.png",path:"/addAccount"}
  ]


  return (
    <>
      <Navbar />


      <div className="flex flex-col mt-28 items-center">

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {dashboard.map((data, index) => (
            <Link to={data.path} key={index}>
              <div

                className="w-24 lg:w-44 h-24 lg:h-36 p-4 border bg-[#28C2A0] text-white rounded-xl shadow-md flex flex-col items-center cursor-pointer "
              >
                <img
                  src={data.logo}
                  alt={data.name}
                  className="w-10 lg:w-20 h-10 lg:h-20 mb-2"
                />
                <span className="font-semibold">{data.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </>
  )
}

export default Dashboard
