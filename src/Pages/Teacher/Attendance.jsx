import Navbar from "../../Components/Navbar/Navbar"

const Attendance = () => {
    const totalStudent = [
  { rollNo: '101', name: 'Ayaan Khan' },
  { rollNo: '102', name: 'Zara Ahmed' },
  { rollNo: '103', name: 'Aryan Malik' },
  { rollNo: '104', name: 'Fatima Noor' },
  { rollNo: '105', name: 'Hamza Ali' },
  { rollNo: '106', name: 'Laiba Sheikh' },
  { rollNo: '107', name: 'Usman Tariq' },
  { rollNo: '108', name: 'Hira Yousaf' },
  { rollNo: '109', name: 'Bilal Rauf' },
  { rollNo: '110', name: 'Mariam Zubair' }
    ]
  return (
    <>
     <Navbar/>
     <table className="table-auto w-full lg:w-2/3 mx-auto border border-gray-300 text-center mt-5">
  <thead className="bg-[#28C2A0] text-white">
    <tr>
      <th className="py-2 px-4 border">Roll Number</th>
      <th className="py-2 px-4 border">Student Name</th>
      <th className="py-2 px-4 border">Present</th>
      <th className="py-2 px-4 border">Absent</th>
      <th className="py-2 px-4 border">Leave</th>
    </tr>
  </thead>
  <tbody>
    {/* {Array.from({ length: 8 }).map((_, index) => ( */}
    {totalStudent.map((student,index)=>(

      <tr key={index} className=" hover:bg-gray-100">
        <td className="py-2 px-4 border border-white shadow-md">{student.rollNo}</td>
        <td className="py-2 px-4 border border-white shadow-md">{student.name}</td>
        <td className="py-2 px-4 border border-white shadow-md">
          <input type="radio" className="w-5 h-5 accent-blue-600" />
        </td>
        <td className="py-2 px-4 border border-white shadow-md">
          <input type="radio" className="w-5 h-5 accent-blue-600" />
        </td>
         <td className="py-2 px-4 border border-white shadow-md">
          <input type="radio" className="w-5 h-5 accent-blue-600" />
        </td>
      </tr>
    ))}
  </tbody>
</table>
 
    </>
  )
}

export default Attendance
