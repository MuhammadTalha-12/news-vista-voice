import React from 'react';
import './Dashboard.css';
import OrderCard from './OrderCard'; // Ensure the correct path
import OrderStatus from './OrderStatus'; // Ensure the correct path
import Sidebar from './Sidebar'; // Ensure the correct path
import HomeButton from './HomeButton'; // Ensure the correct path

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <HomeButton />
        <OrderCard />
        <OrderStatus />
        {/* Add any other components you want to include */}
      </div>
    </div>
  );
};

export default Dashboard;