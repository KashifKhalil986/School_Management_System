import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    className: "",
    section: "",
    rollNumber: "",
    studentEmail: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form Submitted :", formData);
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center mt-2 lg:mt-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-full lg:w-[500px]"
        >
          {/* Centered Image Logo */}
         <div className="flex justify-center mb-4">
            <label htmlFor="student-image">
              <div className="cursor-pointer w-20 lg:w-28 h-20 lg:h-28 bg-white rounded-full border-4 border-[#28C2A0] shadow-lg flex items-center justify-center overflow-hidden">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src="./picture.png"
                    alt="Upload"
                    className="w-8 lg:w-16 h-8 lg:h-16"
                  />
                )}
              </div>
              <input
                type="file"
                id="student-image"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-center text-[#28C2A0]">
            Add Student
          </h2>

          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block mb-1">
                Full Name<span className="text-red-500 p-1">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleOnChange}
                className="w-full p-1 border rounded"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1">
                Email<span className="text-red-500 p-1">*</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={handleOnChange}
                value={formData.email}
                className="w-full p-1 border rounded"
                required
              />
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block mb-1">
                Class<span className="text-red-500 p-1">*</span>
              </label>
              <input
                type="text"
                name="className"
                onChange={handleOnChange}
                value={formData.className}
                className="w-full p-1 border rounded"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1">
                Section<span className="text-red-500 p-1">*</span>
              </label>
              <input
                type="text"
                name="section"
                onChange={handleOnChange}
                value={formData.section}
                className="w-full p-1 border rounded"
                required
              />
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="w-1/2">
              <label className="block mb-1">
                Roll Number<span className="text-red-500 p-1">*</span>
              </label>
              <input
                type="text"
                name="rollNumber"
                onChange={handleOnChange}
                value={formData.rollNumber}
                className="w-full p-1 border rounded"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1">
                Student Email<span className="text-red-500 p-1">*</span>
              </label>
              <input
                type="email"
                name="studentEmail"
                onChange={handleOnChange}
                value={formData.studentEmail}
                className="w-full p-1 border rounded"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#28C2A0] text-white p-2 rounded hover:bg-[#28c287] cursor-pointer"
          >
            Add to contact
          </button>
        </form>
      </div>
    </>
  );
};

export default AddStudent;
