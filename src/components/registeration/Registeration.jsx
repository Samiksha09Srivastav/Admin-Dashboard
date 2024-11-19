import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { registerImage } from '../../assets/Images/utils';
import { auth } from '../../firebase/Firebase';
import { addUserWithRole } from '../../firebase/UserManagement';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    role: 'user'
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, role, name } = formData;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Set the display name
      await updateProfile(user, {
        displayName: name
      });

      // Save the user with role in the database
      await addUserWithRole(user.uid, email, role);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Failed to create an account. Please try again.');
    }
  };

  return (
    <div className='min-h-screen flex px-10 py-3'>
      <div className="flex flex-col md:flex-row items-center bg-blue-700 md:w-4/5 w-full max-w-5xl mx-auto shadow-xl rounded-lg overflow-hidden">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='md:w-1/2 w-full text-white'
        >
          <img src={registerImage} className='h-96 mt-0 mx-auto' alt="Register" />
          <h2 className='text-2xl md:text-3xl text-center m-6 font-bold mb-4'>Welcome to Our Platform</h2>
          <p className='text-lg m-6'>
            Join us and get access to exclusive features and services. Create your account today and start your journey with us!
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='md:w-1/2 bg-white w-full p-6'
        >
          <h2 className='mb-6 text-2xl md:text-3xl font-bold text-gray-700 text-center'>Create a new account</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor="name" className='block text-sm font-medium text-gray-600'>Full Name</label>
              <input 
                type="text" 
                name='name'
                id='name'
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete='off'
                className='w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor="email" className='block text-sm font-medium text-gray-600'>Email Address</label>
              <input
                type="email"
                name='email'
                id='email'
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete='off'
                className='w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor="password" className='block text-sm font-medium text-gray-600'>Password</label>
              <input
                type="password"
                name='password'
                id='password'
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete='off'
                className='w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor="phone" className='block text-sm font-medium text-gray-600'>Phone Number</label>
              <input
                type="tel"
                name='phone'
                id='phone'
                value={formData.phone}
                onChange={handleChange}
                required
                autoComplete='off'
                className='w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
              />
            </div>
            <div className='mb-6'>
              <label htmlFor="role" className='block text-sm font-medium text-gray-600'>Role</label>
              <select
                name='role'
                id='role'
                value={formData.role}
                onChange={handleChange}
                autoComplete='off'
                className='w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
            <div className='mb-6'>
              <button
                className='w-full py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-900 focus:outline-none'
                type='submit'
              >
                Register
              </button>
            </div>
          </form>
          <p className='text-center text-gray-500'>Already have an account? <Link to='/login' className='text-blue-600 hover:underline'>Sign in</Link></p>
        </motion.div>
      </div>
    </div>
  );
};

export default Registration;
