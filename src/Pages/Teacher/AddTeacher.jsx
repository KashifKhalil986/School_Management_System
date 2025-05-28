import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";

const AddTeacher = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cnic: "",
    phoneNumber: "",
    address: "",
    bankAccountNumber: "",
    bankName: "",
    status: "Active",
    salary: "",
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
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-2 lg:mt-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-full lg:w-[500px]"
        >
          {/* Image Upload */}
          <div className="flex justify-center mb-4">
            <label htmlFor="teacher-image">
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
                id="teacher-image"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-center text-[#28C2A0]">
            Add Teacher
          </h2>

          {/* Username & Email */}
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block mb-1">
                Username<span className="text-red-500 p-1">*</span>
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
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
                value={formData.email}
                onChange={handleOnChange}
                className="w-full p-1 border rounded"
                required
              />
            </div>
          </div>

          {/* Password & CNIC */}
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block mb-1">
                Password<span className="text-red-500 p-1">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleOnChange}
                className="w-full p-1 border rounded"
                required
              />
            </div>

            <div className="w-1/2">
              <label className="block mb-1">
                CNIC<span className="text-red-500 p-1">*</span>
              </label>
              <input
                type="text"
                name="cnic"
                value={formData.cnic}
                onChange={handleOnChange}
                className="w-full p-1 border rounded"
                required
              />
            </div>
          </div>

          {/* Phone Number & Address */}
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block mb-1">
                Phone Number<span className="text-red-500 p-1">*</span>
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleOnChange}
                className="w-full p-1 border rounded"
                required
              />
            </div>

            <div className="w-1/2">
              <label className="block mb-1">
                Address<span className="text-red-500 p-1">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleOnChange}
                className="w-full p-1 border rounded"
                required
              />
            </div>
          </div>

          {/* Bank Account & Bank Name */}
          <div className="flex gap-4 mb-4">
          

            <div className="w-1/2">
              <label className="block mb-1">
                Bank Name<span className="text-red-500 p-1">*</span>
              </label>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleOnChange}
                className="w-full p-1 border rounded"
                required
              />
            </div>

              <div className="w-1/2">
              <label className="block mb-1">
              Account Number<span className="text-red-500 p-1">*</span>
              </label>
              <input
                type="text"
                name="bankAccountNumber"
                value={formData.bankAccountNumber}
                onChange={handleOnChange}
                className="w-full p-1 border rounded"
                required
              />
            </div>
          </div>

          {/* Salary & Status */}
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block mb-1">
                Salary<span className="text-red-500 p-1">*</span>
              </label>
              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleOnChange}
                className="w-full p-1 border rounded"
                required
              />
            </div>

            <div className="w-1/2">
              <label className="block mb-1">
                Status<span className="text-red-500 p-1">*</span>
              </label>
              <div className="flex gap-4 mt-1">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="Active"
                    checked={formData.status === "Active"}
                    onChange={handleOnChange}
                    className="mr-1"
                  />
                  Active
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="InActive"
                    checked={formData.status === "InActive"}
                    onChange={handleOnChange}
                    className="mr-1"
                  />
                  InActive
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-4xl bg-[#28C2A0] text-white p-2  hover:bg-[#28c287] cursor-pointer"
          >
            Add Teacher
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTeacher;
