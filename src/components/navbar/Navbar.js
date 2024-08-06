import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoImage } from '../../assets/Images/utils';
import { IoMdSearch, IoIosNotifications } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa6";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn ] = useState(true);
  const navigate = useNavigate();

  return (
    <nav className='flex justify-between items-center bg-white shadow-md py-2 px-8'>
      <div className='flex items-center'>
        <img 
          src={logoImage}
          alt='Logo'
          className='h-12 w-20 mr-2'
        />
        <span className='text-black text-xl font-semibold'>WORKFORCE M</span>  
      </div>
      <div className='flex items-center '>
        <div className='relative'>
          <IoMdSearch size={20} className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400'/>
          <input 
            type='text' 
            placeholder='Search...'
            className='w-64 p-2 pl-10 rounded border border-gray-300 focus:outline-none focus:border-blue-500'
          />
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <IoIosNotifications size={24} className='text-blue-700 cursor-pointer' />
        <FaEnvelope size={20} className='text-blue-700 cursor-pointer' />
        {isLoggedIn ? (
          <span>
            <button 
              onClick={() => setIsLoggedIn(false)}
              className='bg-blue-700 text-white px-6 py-2 mr-2 rounded hover:bg-blue-600 transition duration-200'
            >
              Logout
            </button>
            <span className='text-blue-700 text-lg font-medium shadow rounded-xl shadow-blue-200 px-6 py-2 '>Samiksha Srivastav</span>
          </span>
        ) : (
          <button 
            onClick={() => setIsLoggedIn(true)}
            className='bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-200'
          >
            Login
          </button>
        )}
      
      </div>
    </nav>
  );
}

export default Navbar;
