import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { FaClockRotateLeft } from "react-icons/fa6";
import { RiRefund2Fill, RiAdminFill, RiSettings2Fill  } from "react-icons/ri";

const Sidebar = () => {
  const [isClaimHovered, setIsClaimHovered] = useState(false);
  const [isLeaveHovered, setIsLeaveHovered] = useState(false);
  const [isAdminHovered, setIsAdminHovered] = useState(false);

  return (
    <main className='flex min-h-screen'>
      <div className='bg-blue-900 text-gray-200 w-64 p-4'>
        {/* Sidebar items */}
        <div className='flex-grow my-4'>
          <Link 
            to='home'
            className='flex items-center py-2 px-4 rounded text-gray-200 hover:bg-white hover:text-blue-700'
          >
            <AiOutlineHome size={20} className='mr-2'/>  
            Home
          </Link>
          <div 
            className='relative'
            onMouseEnter={() => setIsLeaveHovered(true)}
            onMouseLeave={() => setIsLeaveHovered(false)}
          >
            <span 
              className='flex items-center py-2 px-4 rounded text-gray-200 hover:bg-white hover:text-blue-700 cursor-pointer'
            >
              <FaClockRotateLeft size={18} className='mr-2'/>
              Leave
            </span>
            {isLeaveHovered && (
              <div className="absolute left-44 top-0 mt-1 w-52 bg-blue-900 border text-white shadow-md shadow-white ">
                <NavLink 
                  to="apply-leave"
                  className="hover:text-gray-900 hover:bg-white border-b border-neutral-300 block px-6 py-3 "
                >
                  Apply Leave
                </NavLink>
                <NavLink 
                  to="view-leaves"
                  className="hover:text-gray-900 hover:bg-white block px-6 py-3"
                >
                  View My Leaves
                </NavLink>
              </div>
            )}
          </div>
          <div 
            className='relative'
            onMouseEnter={() => setIsClaimHovered(true)}
            onMouseLeave={() => setIsClaimHovered(false)}
          >
            <span 
              className='flex items-center py-2 px-4 rounded text-gray-200 hover:bg-white hover:text-blue-700 cursor-pointer'
            >
              <RiRefund2Fill size={22} className='mr-2'/>
              Reimbursement
            </span>
            {isClaimHovered && (
              <div className="absolute left-44 top-0 mt-1 w-52 bg-blue-900 border text-white shadow-md shadow-white ">
                <NavLink 
                  to="/add-claims"
                  className="hover:text-gray-900 hover:bg-white border-b border-neutral-300 block px-6 py-3 "
                >
                  Add Claims
                </NavLink>
                <NavLink 
                  to="/view-claims"
                  className="hover:text-gray-900 hover:bg-white block px-6 py-3"
                >
                  View My Claims
                </NavLink>
              </div>
            )}
          </div>
          <Link 
            to='setting'
            className='flex items-center py-2 px-4 rounded text-gray-200 hover:bg-white hover:text-blue-700'
          >
            <RiSettings2Fill  size={18} className='mr-2'/>
            Setting
          </Link>
          <hr className='my-4 border-gray-100' />
          <div 
            className='relative'
            onMouseEnter={() => setIsAdminHovered(true)}
            onMouseLeave={() => setIsAdminHovered(false)}
          >
            <span 
              className='flex items-center py-2 px-4 rounded text-gray-200 hover:bg-white hover:text-blue-700 cursor-pointer'
            >
              <RiAdminFill size={22} className='mr-2'/>
              Admin Services
            </span>
            {isAdminHovered && (
              <div className="absolute left-44 top-0 mt-1 w-52 bg-blue-900 border text-white rounded shadow-md shadow-white ">
                <NavLink 
                  to="/admin/add-employee"
                  className="hover:text-blue-700 hover:bg-white border-b border-neutral-300 block px-6 py-3 "
                >
                  Add Employee
                </NavLink>
                <NavLink 
                  to="/admin/view-employee"
                  className="hover:text-blue-700 hover:bg-white border-b border-neutral-300 block px-6 py-3 "
                >
                  View Employee
                </NavLink>
                <NavLink 
                  to="/admin/all-claims"
                  className="hover:text-blue-700 hover:bg-white block border-b border-neutral-300 px-6 py-3 "
                >
                  View All Claims
                </NavLink>
                <NavLink 
                  to="/admin/add-claims"
                  className="hover:text-blue-700 hover:bg-white block px-6 py-3 "
                >
                  Add Claims
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Sidebar;
