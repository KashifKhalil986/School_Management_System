import Navbar from "../../Components/Navbar/Navbar";
import GenericTable from "../../Components/Table/GenericTable";

const Result = () => {
    const headers = ['S.No', 'Roll No', 'Name', 'Total Marks', 'Obtained Marks','Action'];
const data = [
  { rollNo: '123', name: 'Ali', totalMarks: 100, obtainedMarks: 85 },
  { rollNo: '124', name: 'Sara', totalMarks: 100, obtainedMarks: 92 }
];
<GenericTable headers={headers} data={data} mode="result" />

  return (
    <>
    <Navbar/>
    <GenericTable headers={headers} data={data} mode="result" />
      
    </>
  )
}

export default Result
