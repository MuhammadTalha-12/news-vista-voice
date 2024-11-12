import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <NavLink to="/orders" className="sidebar-link">Sports</NavLink>
            <NavLink to="/facilities" className="sidebar-link">Crime</NavLink>
            <NavLink to="/menu" className="sidebar-link">Polictics</NavLink>
            <NavLink to="/locations" className="sidebar-link">Education</NavLink>
        </div>
    );
};

export default Sidebar;