import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar"
import GenericTable from "../../Components/Table/GenericTable"
import { BaseUrl } from "../../Components/Api/BaseUrl";
import { Get_All_Teachers_End_Point } from "../../Components/Api/EndPoint";
import fetchData from "../../Components/Api/axios";
import { Get_All_Teachers_Middle_Point } from "../../Components/Api/MiddlePoint";

const AllTeachers = () => {
    const headers = ['S.No', 'Name', 'Email', ' Cnic', ' Class','Section', 'Address', 'Bank', 'Account', 'Salary','Action'];
    // const data = [
    //     { userName: 'Ali', email: 'Ali@gmail.com', cnic: '10000000', classSection: '1A', address: 'Peshawar', bank: "ubl", account: "12121221", salary: "120000" },
    // ];

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchAllTeachers = async () => {
            try {
                const url = BaseUrl + Get_All_Teachers_Middle_Point + Get_All_Teachers_End_Point;
                const method = "GET";

                const response = await fetchData(url, method);
                console.log("all teacher response", response)
                // const getData = {
                //     userName: response.data.userName,
                //     email: response.data.email,
                //     cnic: response.data.cnic,
                //     class: response.data.ClassName,
                //     section: response.data.section,
                //     address: response.data.address,
                //     bank: response.data.bankName,
                //     account: response.data.accountNumber,
                //     salary: response.data.salary
                // }
                setData(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllTeachers()
    },[])
    return (
        <div>
            <Navbar />
            <GenericTable headers={headers} data={data} mode="allTeachers" />
        </div>
    )
}

export default AllTeachers
