import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { loginImage } from '../../assets/Images/utils'
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name] : value
    }))
  };

  return (
    <div className=' min-h-screen p-20 px-40 min-w-6xl '>
      <div className="flex justify-around  items-center border shadow-xl ">
      <motion.div
        initial={{x:-100, opacity: 0}}
        animate={{x:0, opacity:1}}
        transition={{duration: 0.5}}
        className='max-w-md w-full bg-white p-6 border-r' 
      >
        <img 
          src={loginImage}
        />
      </motion.div>
      <motion.div 
        initial={{x:100, opacity: 0}}
        animate={{x:0, opacity:1}}
        transition={{duration: 0.5}}
        className='max-w-md w-full bg-white p-6 ' 
      >
        <h2 className='mb-10 mt-4 font-bold text-2xl text-gray-700 text-tight font-bolder'>Sign in to your account</h2>
          <form  >
            <div className='my-4 mt-4 '>
              <label htmlFor="email" className='block text-black text-sm   font-medium  mb-2'>
                Email address
              </label>
              <input 
                type="email" 
                name='email'
                id='email'
                required
                onChange={handleChange}
                autoComplete='off'
                className='w-full p-2 border border-blue-700 rounded-lg focus:outline-none focus:border-blue-500'
              />
            </div>
            <div>
              <label htmlFor="password" className='text-sm font-medium text-black mb-2 block' >
                Password
              </label>
              <input 
                type="password" 
                name='password'
                id='password'
                required
                onChange={handleChange}
                className='w-full p-2 border border-blue-700 rounded-lg focus:outline-none focus:border-blue-500'
              />
            </div>
            <div className='my-8 text-center'>
              <button 
              className='w-full py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-900 focus:outline-none'
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
          <p className='text-gray-500 text-center text-sm'>Don't have account? <span className='text-sm text-blue-600  hover:underline'><Link to='/register'>Register</Link></span></p>
      </motion.div>
      </div>
    </div>
  );
}

export default Login;
