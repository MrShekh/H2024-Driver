// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard'; // Ensure correct casing
import Sidebar from './components/sidebar'; // Ensure correct casing
import UserProfile from './components/UserProfile';
import CurrentSchedule from './components/CurrentSchedule';
import RouteMap from './components/RouteMap';
import PerformanceMetrics from './components/PerformanceMetrics';
import NotificationList from './components/NotificationList'; // Import NotificationList

import './styles.css'; // Import the styles

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Sidebar />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/user-profile" element={<UserProfile />} />
                        <Route path="/current-schedule" element={<CurrentSchedule />} />
                        <Route path="/route-map" element={<RouteMap />} />
                        <Route path="/performance-metrics" element={<PerformanceMetrics />} />
                        <Route path="/notifications-list" element={<NotificationList />} /> {/* Added route for notifications */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
