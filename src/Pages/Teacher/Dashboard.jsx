import { Link } from "react-router-dom"

const Dashboard = () => {
    const dashboard = [
        {name :"Add Student",logo:"./addUser.png",path:"/add-student"},
        {name :"Attendance",logo:"./attendance.png",path:"/attendance"},
        {name :"HomeWork",logo:"./homework.png",path:"/homework"},
        {name :"Result",logo:"./result.png",path:"/result"},
        {name :"Exam Routine",logo:"./exam.png",path:"/exam-routine"},
        {name :"Solution",logo:"./solution.png",path:"/solution"},
        {name :"Notice & Event",logo:"./notice.png",path:"/notice-event"},
        {name :"Add Account",logo:"./addUser.png",path:"/addAccount"}
    ]
  return (
    <>
        <div className="relative">
        <img
          className="w-full h-28 sm:h-36 md:h-40 lg:h-52"
          src="./curve.png"
          alt="curve"
        />

        <div className="absolute top-10 md:top-14 lg:top-24 left-1/2 transform -translate-x-1/2 w-20 lg:w-40 h-20 lg:h-40 bg-white rounded-full border-4 border-[#28C2A0] shadow-lg flex flex-col items-center justify-center">
          <img
            src="./picture.png"
            alt="Logo"
            className="w-10 lg:w-20 h-10 lg:h-20 mb-2"
          />
        </div>
      </div> 


    <div className="flex flex-col mt-28 items-center">
  <h3 className="font-bold text-[#0C46C4] mb-4">Choose your option</h3>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    {dashboard.map((data, index) => (
 <Link to={data.path}>
 <div
        key={index}
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
