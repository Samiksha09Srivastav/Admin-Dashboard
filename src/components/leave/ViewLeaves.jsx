import React from 'react';
import { leaveData } from '../../constants/utils';
import { TiDelete } from "react-icons/ti";
import { AiOutlineEye } from "react-icons/ai";

const ViewLeaves = () => {
  return (
    <main className=' p-8 shadow-lg rounded-lg flex-1'>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white cursor-pointer rounded-lg'>
          <thead className='text-black'>
            <tr>
              <th className='py-3 px-4 border-b border-gray-300 text-left'>Claim Reason</th>
              <th className='py-3 px-4 border-b border-gray-300 text-left'>Start Date</th>
              <th className='py-3 px-4 border-b border-gray-300 text-left'>End Date</th>
              <th className='py-3 px-4 border-b border-gray-300 text-left'>Work On Date</th>
              <th className='py-3 px-4 border-b border-gray-300 text-left'>Status</th>
              <th className='py-3 px-4 border-b border-gray-300 text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveData.map((leave) => (
              <tr key={leave.id} className='hover:bg-blue-50'>
                <td className='py-3 px-4 border-b text-sm border-gray-300'>{leave.leaveReason}</td>
                <td className='py-3 px-4 border-b text-sm border-gray-300'>{leave.startDate}</td>
                <td className='py-3 px-4 border-b text-sm border-gray-300'>{leave.endDate}</td>
                <td className='py-3 px-4 border-b text-sm border-gray-300'>{leave.workOnDate}</td>
                <td className='py-3 px-4 border-b text-sm border-gray-300'>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${leave.status === 'Approved' ? 'bg-green-100 text-green-800' : leave.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                    {leave.status}
                  </span>
                </td>
                <td className='py-3 px-4 border-b text-sm border-gray-300 text-center'>
                  <button className='text-red-600 hover:text-red-800 mr-2'>
                    <TiDelete size={20} />
                  </button>
                  <button className='text-green-600 hover:text-green-800'>
                    <AiOutlineEye size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default ViewLeaves;
