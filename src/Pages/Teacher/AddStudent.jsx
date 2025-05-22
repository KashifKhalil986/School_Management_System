import { useState } from "react"

const AddStudent = () => {
    const [formData ,setFormData] = useState({
        fullName : "",
        email: "",
        className: "",
        section: "",
        rollNumber: "",
        studentEmail: ""
    })

    const handleOnChange = (e) =>{
         const {name,value} = e.target;
         setFormData((prev)=>({
            ...prev,
            [name]:value
         }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form Submitted :",formData)
    }
  return (
    <>
          <div className="relative">
        <img
          className="w-full h-20 sm:h-24 md:h-32 lg:h-40"
          src="./curve.png"
          alt="curve"
        />

        <div className="absolute top-8 md:top-12 lg:top-20 left-1/2 transform -translate-x-1/2 w-20 lg:w-40 h-20 lg:h-40 bg-white rounded-full border-4 border-[#28C2A0] shadow-lg flex flex-col items-center justify-center">
          <img
            src="./picture.png"
            alt="Logo"
            className="w-8 lg:w-16 h-8 lg:h-16 mb-2"
          />
        </div>
      </div> 

        <div className="flex justify-center items-center mt-20 ">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full lg:w-[500px]">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#0C46C4]">Add Student</h2>
<div className="flex gap-4 mb-4">
  <div className="w-1/2">
    <label className="block mb-1">Full Name</label>
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
    <label className="block mb-1">Email</label>
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
    <label className="block mb-1">Class</label>
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
    <label className="block mb-1">Section</label>
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
    <label className="block mb-1">Roll Number</label>
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
    <label className="block mb-1">Student Email</label>
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

     

        <button type="submit" className="w-full bg-[#0C46C4] text-white p-2 rounded hover:bg-[#0835a0]">
          Add to contact
        </button>
      </form>
    </div>
  
    </>
  )
}

export default AddStudent
