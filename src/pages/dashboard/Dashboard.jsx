import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

const Dashboard = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <Outlet/>
      </div>
    </div>
  );
}

export default Dashboard;
