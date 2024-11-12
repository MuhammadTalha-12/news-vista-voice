// src/components/HomeButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeButton.css'; // Optional: Create a CSS file for styling

const HomeButton = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/dashboard'); // Navigate to the dashboard
    };

    return (
        <button className="home-button" onClick={handleHomeClick}>
            Home
        </button>
    );
};

export default HomeButton;