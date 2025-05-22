import Navbar from "../../Components/Navbar/Navbar"

const HomeWork = () => {
   const questionsAnswers = [
        { no: "Question:1", question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente perferendis maxime hic itaque numquam explicabo amet ex libero eligendi quisquam, consequatur ipsa ut magni in soluta reiciendis? Nisi accusantium optio, earum velit corrupti eos. Animi iste corrupti reprehenderit aliquid magni" },
        { no: "Question:2", question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente perferendis maxime hic itaque numquam explicabo amet ex libero eligendi quisquam, consequatur ipsa ut magni in soluta reiciendis? Nisi accusantium optio, earum velit corrupti eos. Animi iste corrupti reprehenderit aliquid magni" },
        { no: "Question:3", question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente perferendis maxime hic itaque numquam explicabo amet ex libero eligendi quisquam, consequatur ipsa ut magni in soluta reiciendis? Nisi accusantium optio, earum velit corrupti eos. Animi iste corrupti reprehenderit aliquid magni" },
    ]
  return (
    <>
      <Navbar/>
         <div className="flex w-3/4 flex-col lg:flex-row mx-auto mt-10 border border-white shadow-2xl">
                <div className="w-1/2  p-5  border border-white shadow-xl">
                    {questionsAnswers.map((data, index) => (
                        <div className="">
                            <h3 key={index} className="text-xl font-semibold">{data.no}</h3>
                            <p>{data.question}</p>
                        </div>
                    ))}
                </div>
                <div className="w-1/2 p-5 border border-white shadow-2xl">
                    <h3 className="text-xl font-semibold">Add HomeWork</h3>

                  <div className="flex w-full mt-20 gap-4">

  <div className="flex-1">
    <label className="font-semibold block mb-1">Class</label>
    <select className="w-full border border-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#28C2A0]">
      <option value="">Select Class</option>
      <option value="class1">Class 1</option>
      <option value="class2">Class 2</option>
      <option value="class3">Class 3</option>
      <option value="class4">Class 4</option>
    </select>
  </div>

  <div className="flex-1">
    <label className="font-semibold block mb-1">Subject</label>
    <select className="w-full border border-gray-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#28C2A0]">
      <option value="">Select Subject</option>
      <option value="math">Mathematics</option>
      <option value="science">Science</option>
      <option value="english">English</option>
      <option value="history">History</option>
    </select>
  </div>

</div>

<div className="flex">
    <button className="w-24 mx-auto border p-1 rounded mt-5 bg-[#28C2A0] border-[#28C2A0] cursor-pointer">Submit</button>
</div>

                </div>
            </div>
    </>
  )
}

export default HomeWork
