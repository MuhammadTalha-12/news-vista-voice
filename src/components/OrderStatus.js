import React from 'react';
import { NavLink } from 'react-router-dom';
import './OrderStatus.css';

const OrderStatus = () => {
    return (
        <div className="order-status-container">
            <NavLink to="/delivery" className="status-button">Home</NavLink>
            <NavLink to="/statistics" className="status-button">Statistics</NavLink>
            <NavLink to="/settings" className="status-button">Settings</NavLink>
            <NavLink to="/user" className="status-button">Account</NavLink>
        </div>
    );
};

export default OrderStatus;