import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
const GenericTable = ({ headers, data,mode,  onAttendanceChange }) => {
  return (
    <>
       <table className="table-auto w-full lg:w-2/3 mx-auto border border-gray-300 text-center mt-5">
      <thead className={`bg-[#28C2A0] text-white}`}>
        <tr>
          {headers.map((header, idx) => (
            <th key={idx} className="py-2 px-4 border text-white">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
      {
  mode === "attendance" ? (
    data.map((student, index) => (
      <tr key={index} className="hover:bg-gray-100">
        <td className="py-2 px-4 border border-white shadow-md">{index + 1}</td>
        <td className="py-2 px-4 border border-white shadow-md">{student.rollNo}</td>
        <td className="py-2 px-4 border border-white shadow-md">{student.name}</td>
        {["present", "absent", "leave"].map((status) => (
          <td key={status} className="py-2 px-4 border border-white shadow-md">
            <input
              type="radio"
              name={`attendance-${index}`}
              value={status}
              className="w-5 h-5 accent-blue-600"
              onChange={() => onAttendanceChange(index, status)}
            />
          </td>
        ))}
      </tr>
    ))
  ) : mode === "result" ? (
        data.map((student, index) => (

   <tr key={index} className="hover:bg-gray-100">
        <td className="py-2 px-4 border border-white shadow-md">{index + 1}</td>
        <td className="py-2 px-4 border border-white shadow-md">{student.rollNo}</td>
        <td className="py-2 px-4 border border-white shadow-md">{student.name}</td>
        <td className="py-2 px-4 border border-white shadow-md">{student.totalMarks}</td>
        <td className="py-2 px-4 border border-white shadow-md">{student.obtainedMarks}</td>
       <td className="py-2 px-4 border border-white shadow-md">  <FontAwesomeIcon
                        icon={faEdit}
                        className="text-green-500 mr-2 cursor-pointer"
                        // onClick={() => onEdit(item)}
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-red-500 cursor-pointer"
                        // onClick={() => onDelete(item)}
                      /></td>
      </tr>
    )
))
: mode === "allTeachers" ? (
        data.map((teacher, index) => (

   <tr key={index} className="hover:bg-gray-100">
        <td className="py-2 px-4 border border-white shadow-md">{index + 1}</td>
        <td className="py-2 px-4 border border-white shadow-md">{teacher.userName}</td>
        <td className="py-2 px-4 border border-white shadow-md">{teacher.email}</td>
        <td className="py-2 px-4 border border-white shadow-md whitespace-nowrap ">{teacher.cnic}</td>
        <td className="py-2 px-4 border border-white shadow-md">{teacher.ClassName}</td>
        <td className="py-2 px-4 border border-white shadow-md">{teacher.section}</td>
        <td className="py-2 px-4 border border-white shadow-md">{teacher.address}</td>
        <td className="py-2 px-4 border border-white shadow-md">{teacher.bankName}</td>
        <td className="py-2 px-4 border border-white shadow-md">{teacher.accountNumber}</td>
        <td className="py-2 px-4 border border-white shadow-md">{teacher.salary}</td>
    <td className="py-2 px-4 border border-white shadow-md">  <FontAwesomeIcon
                        icon={faEdit}
                        className="text-green-500 mr-2 cursor-pointer"
                        // onClick={() => onEdit(item)}
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-red-500 cursor-pointer"
                        // onClick={() => onDelete(item)}
                      /></td>
      </tr>
    )
))
 : null
}

      </tbody>
    </table>
    </>
  )
}

GenericTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    mode: PropTypes.oneOf(['attendance', 'result', 'default','allTeachers']),
  data: PropTypes.arrayOf(PropTypes.shape({
    rollNo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  onAttendanceChange: PropTypes.func.isRequired
};

export default GenericTable;
