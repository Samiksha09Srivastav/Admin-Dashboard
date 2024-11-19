import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoImage } from '../../assets/Images/utils';
import { IoMdSearch, IoIosNotifications } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa6";
import { auth } from '../../firebase/Firebase'; // Import Firebase auth
import { onAuthStateChanged, signOut, updateProfile } from 'firebase/auth'; // Import auth functions

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [newName, setNewName] = useState('');
  const navigate = useNavigate();

  //Function to update display name
  const updateDisplayName = async (newName) => {
    if ( auth.currentUser ) {
      try {
        await updateProfile(auth.currentUser, {
          displayName: newName
        });
        console.log('Display name updated successfully!');
        setUserName(newName);
      } catch(error) {
        console.error('Error updating display name', error);
      }
    }
  }

  // Monitor authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setIsLoggedIn(true);
        setUserName(user.displayName || 'user'); // Use user's displayName or fallback to 'User'
      } else {
        setIsLoggedIn(false);
        setUserName('');
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

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
        <IoIosNotifications size={24} className='text-gray-700 cursor-pointer' />
        <FaEnvelope size={20} className='text-gray-700 cursor-pointer' />
        {isLoggedIn ? (
          <div className='flex items-center space-x-4'>
            <button 
              onClick={handleLogout}
              className='bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-200'
            >
              Logout
            </button>
            <span className='text-blue-700 text-lg font-medium shadow rounded-xl shadow-blue-200 px-6 py-2'>
              {userName}
            </span>
          </div>
        ) : (
          <button 
            onClick={() => navigate('/login')}
            className='bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-200'
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
