import Navbar from "../../Components/Navbar/Navbar";
import { useState } from "react";
import GenericTable from "../../Components/Table/GenericTable";

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState(Array(10).fill(null));

  const totalStudent = [
    { rollNo: '101', name: 'Ali Khan' },
    { rollNo: '102', name: 'Zara Ahmed' },
    { rollNo: '103', name: 'Aryan Khan' },
    { rollNo: '104', name: 'Fatima Gul' },
    { rollNo: '105', name: 'Hamza Ali' },
    { rollNo: '106', name: 'Muhammad Ali' },
    { rollNo: '107', name: 'Ali Muhammad' },
    { rollNo: '108', name: 'Khan Ali' },
    { rollNo: '109', name: 'Muhammad Khan' },
    { rollNo: '110', name: 'Gul Fatima ' }
  ];

  const handleAttendanceChange = (index, status) => {
    const updated = [...attendanceData];
    updated[index] = status;
    setAttendanceData(updated);
    console.log(`Student ${totalStudent[index].name} marked as ${status}`);
  };

  const headers = ['S:NO', 'Roll Number', 'Student Name', 'Present', 'Absent', 'Leave'];

  return (
    <>
      <Navbar />
      <GenericTable
        headers={headers}
        data={totalStudent}
        onAttendanceChange={handleAttendanceChange}
        mode={"attendance"}

      />
    </>
  );
};

export default Attendance;
