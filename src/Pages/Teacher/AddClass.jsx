import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { BaseUrl } from "../../../src/Components/Api/BaseUrl"
import { Add_Class_End_Point } from "../../../src/Components/Api/EndPoint"
import fetchData from "../../Components/Api/axios";

const AddClass = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

  const classOptions = ["KG", "Prep", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"];
  const sectionOptions = ["A", "B", "C"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = {
      name: selectedClass,
      section: selectedSection,
    };

    const url = BaseUrl + Add_Class_End_Point;
    const method = "POST";

    try {
      const response = await fetchData(url, method, form);
      console.log("API Response:", response);

      if (response.status === 200 ||response.status === 201) {
        alert("Class and Section added successfully!");
        setSelectedClass("");
        setSelectedSection("");
      } else {
        alert("Failed to add class. Please try again.");
      }
    } catch (error) {
      console.error("Error while submitting form:", error);
      alert("Something went wrong!");
    }
  };

  const buttonStyles = (selected, value) =>
    selected === value
      ? "bg-[#28C2A0] text-white font-semibold"
      : "bg-gray-100 text-gray-700 hover:bg-gray-200";

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-10">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl mb-4 font-semibold text-center">Add Class</h2>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Class</label>
            <div className="flex flex-wrap gap-2">
              {classOptions.map((cls, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`px-4 py-2 rounded-md border ${buttonStyles(selectedClass, cls)}`}
                  onClick={() => setSelectedClass(cls)}
                >
                  {cls}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Section</label>
            <div className="flex gap-2">
              {sectionOptions.map((sec, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`px-4 py-2 rounded-md border ${buttonStyles(selectedSection, sec)}`}
                  onClick={() => setSelectedSection(sec)}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={!selectedClass || !selectedSection}
            className="w-full bg-[#28C2A0] cursor-pointer text-white font-semibold py-2 rounded disabled:opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddClass;
