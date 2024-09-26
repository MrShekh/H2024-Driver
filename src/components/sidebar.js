// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUser, FaCalendarAlt, FaMapMarkerAlt, FaChartLine, FaBell } from 'react-icons/fa'; 
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">DTC</h2>
            <ul className="sidebar-list">
                <li>
                    <Link className="sidebar-item" to="/">
                        <FaTachometerAlt className="sidebar-icon" /> Dashboard
                    </Link>
                </li>
                <li>
                    <Link className="sidebar-item" to="/user-profile">
                        <FaUser className="sidebar-icon" /> Account
                    </Link>
                </li>
                <li>
                    <Link className="sidebar-item" to="/current-schedule">
                        <FaCalendarAlt className="sidebar-icon" /> Current Schedule
                    </Link>
                </li>
                <li>
                    <Link className="sidebar-item" to="/route-map">
                        <FaMapMarkerAlt className="sidebar-icon" /> Route Map
                    </Link>
                </li>
                <li>
                    <Link className="sidebar-item" to="/performance-metrics">
                        <FaChartLine className="sidebar-icon" /> Performance Metrics
                    </Link>
                </li>
                <li>
                    <Link className="sidebar-item" to="/notifications-list">
                        <FaBell className="sidebar-icon" /> Notifications List
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
