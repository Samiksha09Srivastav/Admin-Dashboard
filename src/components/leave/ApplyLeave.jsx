import React,{useState} from 'react';
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const ApplyLeave = () => {
  const [formData, setFormData] = useState({
    leaveReason:'',
    startDate:'',
    endDate:'',
    workOnDate:'',
    comments:'',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name] : value
    })
  };

  //Submission logic

  return (
    <main className='mx-4 py-4 px-4  flex-1'>
      <span className='flex items-center  text-blue-700'>
        <FaRegArrowAltCircleDown  size={20} className=' mr-2'/> <span className=' text-lg'>Apply Leave Request</span>
      </span>
      <hr className='mt-3 bg-gray-700'/>
      <form className=' pt-4 px-6 bg-white rounded-lg' onSubmit="">
        <div className='grid grid-cols-2 gap-6 '>
          <div className='mb-4'>
            <label htmlFor="leaveReason" className='text-sm font-semibold text-gray-700'>Leave Reason</label>
            <select 
              name="leaveReason" 
              value={formData.leaveReason}
              onChange={handleChange}
              className='w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
            >
              <option value="">Please Select</option>
              <option value="Vacation">Vacation</option>
              <option value="Personal Leave">Personal Leave</option>
              <option value="Sick">Sick</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="startDate" className="text-sm font-semibold text-gray-700">Start Date</label>
            <input 
              type="date" 
              name="startDate" 
              value={formData.startDate}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="endDate" className="text-sm font-semibold text-gray-700">End Date</label>
            <input 
              type="date" 
              name="endDate" 
              value={formData.endDate}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="workOnDate" className="text-sm font-semibold text-gray-700">Start to Work On</label>
            <input 
              type="date" 
              name="workOnDate" 
              value={formData.workOnDate}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="col-span-2 mb-4">
            <label htmlFor="comments" className="text-sm font-semibold text-gray-700">Additional Comments</label>
            <textarea 
              name="comments" 
              value={formData.comments}
              onChange={handleChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-20 resize-none"
              maxLength="100"
            />
            <span className="text-xs text-neutral-500 ml-2">Max length: 100</span>
          </div>
        </div>
        <div className="flex justify-center pb-6">
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-6 rounded mr-2"
            onClick=""
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}

export default ApplyLeave;
