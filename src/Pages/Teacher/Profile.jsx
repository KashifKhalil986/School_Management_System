import Navbar from "../../Components/Navbar/Navbar";
import picture from "../../../public/picture.png"



const Profile = () => {
  

  return (
    
    <>
    <Navbar/>
      <div className={`flex flex-col items-center  min-h-screen  px-4`}>
        <div className={`w-full md:w-[350px] lg:w-[400px] p-6 rounded-lg shadow-lg mt-5 border border-white`}>
          <div className="flex flex-col gap-5 items-center">
            <div className={`text-lg font-semibold   w-full text-start`}>
              Profile
            </div>

            <div className="relative w-[150px] h-[150px] border-2 border-gray-300 rounded-full flex items-center justify-center">
              <label
                htmlFor="file-input"
                className="h-full w-full cursor-pointer rounded-full flex items-center justify-center"
              >
                <img
                  className="h-full w-full rounded-full object-cover"
                  src={picture}
                  alt="Profile"
                />
              </label>
              <input
                id="file-input"
                type="file"
                className="hidden"
              />
            </div>

            <form className="flex flex-col gap-4 w-full">
         
         <div className="flex flex-col lg:flex-row lg:justify-between  gap-3" >
         <div className="w-full lg:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium "
                >
                  User Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your user name"
                  className={`w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#219b53]`}
                  required
                />
              </div>
            
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium "
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`w-full mt-1 px-4 py-2  border rounded-md focus:outline-none focus:ring focus:ring-[#219b53]`}
                  required
                />
              </div>

         </div>
         <div className="flex flex-col lg:flex-row lg:justify-between gap-3">
         <div className="w-full lg:w-1/2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium "
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className={`w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#219b53]`}
                  required
                />
              </div>

              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium "
                >
                 Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  className={`w-full mt-1 px-4 py-2   border rounded-md focus:outline-none focus:ring focus:ring-[#219b53]`}
                  required
                />
              </div>
              </div>

              <button
                type="submit"
                className={`mx-auto w-1/2  bg-[#28C2A0] text-white py-2 rounded-md font-semibold cursor-pointer border transition`}
              >
              Update
              </button>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
