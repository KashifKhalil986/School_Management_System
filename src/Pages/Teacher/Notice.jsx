import Navbar from "../../Components/Navbar/Navbar";

const Notice = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col lg:w-2/3 mx-auto text-center mt-10">
        <label className="text-xl font-bold">Enter Detail</label>
        <textarea
          className="mt-2 h-72 p-5 border focus:outline-none border-gray-100 focus:border-white w-1/2 mx-auto shadow-2xl"
          name="notice"
          id="notice"
        ></textarea>

        <button
          className="mt-6 w-1/2 mx-auto bg-[#28C2A0] text-white font-semibold py-2 px-4 rounded hover:bg-[#28C2A0] cursor-pointer transition duration-200"
          type="submit"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Notice;
