import React from 'react';
import './PerformanceMetrics.css';
import { FaBus, FaClock, FaStar, FaExclamationCircle, FaRoad, FaUsers, FaTachometerAlt } from 'react-icons/fa'; // Icons from react-icons

const PerformanceMetrics = () => {
    // Dummy performance metrics data
    const performanceData = {
        totalTrips: 150,
        onTimePercentage: 92,
        averageRating: 4.7,
        incidentsReported: 2,
        totalDistanceCovered: "1200 km",
        totalPassengers: 3000,
        averageSpeed: "35 km/h",
    };

    return (
        <div className="performance-metrics">
            <h3>Performance Metrics</h3>
            <div className="metrics-container">
                <div className="metric-item">
                    <FaBus className="metric-icon" />
                    <h4>Total Trips</h4>
                    <p>{performanceData.totalTrips}</p>
                </div>
                <div className="metric-item">
                    <FaClock className="metric-icon" />
                    <h4>On-Time Percentage</h4>
                    <p>{performanceData.onTimePercentage}%</p>
                    <div className="progress-bar">
                        <div
                            className="progress"
                            style={{ width: `${performanceData.onTimePercentage}%` }}
                        ></div>
                    </div>
                </div>
                <div className="metric-item">
                    <FaStar className="metric-icon" />
                    <h4>Average Rating</h4>
                    <p>{performanceData.averageRating} / 5</p>
                    <div className="rating-stars">
                        {Array.from({ length: Math.floor(performanceData.averageRating) }).map((_, i) => (
                            <FaStar key={i} className="filled-star" />
                        ))}
                        {performanceData.averageRating % 1 !== 0 && (
                            <FaStar className="half-star" />
                        )}
                    </div>
                </div>
                <div className="metric-item">
                    <FaExclamationCircle className="metric-icon" />
                    <h4>Incidents Reported</h4>
                    <p>{performanceData.incidentsReported}</p>
                </div>
                <div className="metric-item">
                    <FaRoad className="metric-icon" />
                    <h4>Total Distance Covered</h4>
                    <p>{performanceData.totalDistanceCovered}</p>
                </div>
                <div className="metric-item">
                    <FaUsers className="metric-icon" />
                    <h4>Total Passengers</h4>
                    <p>{performanceData.totalPassengers}</p>
                </div>
                <div className="metric-item">
                    <FaTachometerAlt className="metric-icon" />
                    <h4>Average Speed</h4>
                    <p>{performanceData.averageSpeed}</p>
                </div>
            </div>
        </div>
    );
};

export default PerformanceMetrics;
