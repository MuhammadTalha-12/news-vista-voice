import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider
import Sidebar from './components/Sidebar';
import OrderStatus from './components/OrderStatus';
import OrderCard from './components/OrderCard';
import LoginPage from './components/LoginPage'; // Import LoginPage
//import HomeButton from './components/HomeButton'; // Import the HomeButton
import './App.css';

// Create placeholder components for the new routes
const Orders = () => <h2>Orders Page</h2>;
const Facilities = () => <h2>Facilities Page</h2>;
const Menu = () => <h2>Menu Page</h2>;
const Locations = () => <h2>Locations Page</h2>;
const Delivery = () => <h2>Delivery Page</h2>;
const Statistics = () => <h2>Statistics Page</h2>;
const Settings = () => <h2>Settings Page</h2>;
const User = () => <h2>User Page</h2>;

// Main Dashboard component that includes the sidebar and other components
const Dashboard = () => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="right-content">
       {/* Include the Home button */}
        <OrderStatus />
        <OrderCard />
      </div>
    </div>
  );
};

function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID"> {/* Replace with your actual client ID */}
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<LoginPage />} /> {/* Login Page */}
            <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard with sidebar and components */}
            {/* Additional routes */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/user" element={<User  />} />
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;