import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";
// import { Link } from 'react-router-dom';
import { BaseUrl } from "../../Components/Api/BaseUrl"
import { SuperAdmin_Login_Middle_Point } from "../../Components/Api/MiddlePoint"
import { SuperAdmin_Login_End_Point } from "../../Components/Api/EndPoint"
import fetchData from "../../Components/Api/axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""

  })
const navigate = useNavigate()
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  const [showPassword, setShowPassword] = useState("false")


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted Successfully")
    console.log("userName", form.email)
    console.log("password", form.password)
    const url = BaseUrl + SuperAdmin_Login_Middle_Point + SuperAdmin_Login_End_Point;
    const method = "POST"
    const response = await fetchData(url, method, form)
    console.log("response",response)
    // console.log("api url",url)


    if(response.status === 200 || response.status === 201 ){
      console.log("response data",response.data)
      localStorage.setItem('token' , response.data.access_token)
      navigate("/dashboard");
    }else{
alert("error",response.error)
    }

  }
  return (
    <>
      <div className="relative">
        <img
          className="w-full h-28 sm:h-36 md:h-40 lg:h-52"
          src="../../../public/curve.png"
          alt="curve"
        />

        <div className="absolute top-10 md:top-14 lg:top-24 left-1/2 transform -translate-x-1/2 w-24 lg:w-52 h-24 lg:h-52 bg-white rounded-full border-4 border-[#28C2A0] shadow-lg flex flex-col items-center justify-center">
          <img
            src="../../../public/logo.png"
            alt="Logo"
            className="w-16 lg:w-36 h-16 lg:h-36 mb-2"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 lg:mt-24">

        <form
          onSubmit={handleSubmit}>
          <div className="bg-white p-4 lg:p-8 w-60 lg:w-80 rounded-lg shadow-md">
            <div className="mb-6">
              <label className="block text-sm  mb-1">Username</label>
              <div className="flex items-center border-b border-gray-300">
                <input
                  type="email"
                  name="email"
                  onChange={handleOnChange}
                  className="flex-1 p-2 text-gray-600 outline-none"
                  placeholder="Enter email"
                  required
                />
                <FontAwesomeIcon className="text-[#28C2A0]" icon={faUser} />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm  mb-1">Password</label>
              <div className="flex items-center border-b border-gray-300">
                <input
                  name="password"
                  type={showPassword ? "password" : "text"}
                  onChange={handleOnChange}
                  className="flex-1 p-2 text-gray-600 outline-none"
                  placeholder="Enter Password"
                  required
                />
                <FontAwesomeIcon onClick={() => setShowPassword(!showPassword)} className="text-[#28C2A0]" icon={showPassword ? faEyeSlash : faEye} />
              </div>
            </div>

            {/* <Link to="/dashboard"> */}
            <button
              type="submit"
              className="w-full bg-[#28C2A0] text-white py-2 rounded-lg font-semibold">
              Login
            </button>
            {/* </Link> */}

            <p className="text-center mt-4 text-gray-400 text-sm">
              Forgot Password ?
            </p>
          </div>
        </form>


      </div>

    </>
  )
}

export default LoginPage
