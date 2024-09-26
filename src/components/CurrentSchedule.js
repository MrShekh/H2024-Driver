// src/components/CurrentSchedule.js
import React from 'react';
import './CurrentSchedule.css'; // Link to a CSS file for styles

const CurrentSchedule = () => {
    const scheduleData = {
        shiftStart: "08:00 AM",
        shiftEnd: "04:00 PM",
        busNumber: "1234",
        route: "Route A",
        nextStops: [
            { stop: "Station 1", arrivalTime: "08:30 AM", distance: "5 km" },
            { stop: "Station 2", arrivalTime: "09:00 AM", distance: "10 km" },
            { stop: "Station 3", arrivalTime: "09:30 AM", distance: "7 km" },
            { stop: "Station 4", arrivalTime: "10:00 AM", distance: "3 km" },
            { stop: "Station 5", arrivalTime: "10:30 AM", distance: "2 km" },
        ],
        currentPassengerCount: 12,
        maxPassengerCapacity: 40,
        breakTime: "10:00 AM",
        breakDuration: "15 minutes",
        performanceMetrics: {
            onTimePercentage: 85,
            averageSpeed: "30 km/h",
            incidentsReported: 1,
        },
        upcomingEvents: [
            "Maintenance check scheduled for tomorrow.",
            "Reminder: Attend training session next week.",
            "New route introduced: Route B starts next month."
        ],
        linkedDuties: [
            { dutyID: "LD-001", date: "2024-09-26", status: "Completed" },
            { dutyID: "LD-002", date: "2024-09-25", status: "Pending" }
        ],
        unlinkedDuties: [
            { dutyID: "ULD-001", date: "2024-09-27", status: "Available" },
            { dutyID: "ULD-002", date: "2024-09-28", status: "Available" }
        ]
    };

    return (
        <div className="current-schedule">
            <h3>Current Schedule</h3>
            <div className="schedule-details">
                <p><strong>Shift:</strong> {scheduleData.shiftStart} - {scheduleData.shiftEnd}</p>
                <p><strong>Bus Number:</strong> {scheduleData.busNumber}</p>
                <p><strong>Route:</strong> {scheduleData.route}</p>
                <p><strong>Current Passengers:</strong> {scheduleData.currentPassengerCount} / {scheduleData.maxPassengerCapacity}</p>
                <p><strong>Next Break:</strong> {scheduleData.breakTime} for {scheduleData.breakDuration}</p>
            </div>

            <div className="next-stops">
                <h4>Next Stops:</h4>
                <ul>
                    {scheduleData.nextStops.map((stop, index) => (
                        <li key={index}>
                            <strong>{stop.stop}</strong> - Arriving at {stop.arrivalTime} ({stop.distance} away)
                        </li>
                    ))}
                </ul>
            </div>

            <div className="performance-metrics">
                <h4>Performance Metrics:</h4>
                <p><strong>On-Time Percentage:</strong> {scheduleData.performanceMetrics.onTimePercentage}%</p>
                <p><strong>Average Speed:</strong> {scheduleData.performanceMetrics.averageSpeed}</p>
                <p><strong>Incidents Reported:</strong> {scheduleData.performanceMetrics.incidentsReported}</p>
            </div>

            <div className="upcoming-events">
                <h4>Upcoming Events:</h4>
                <ul>
                    {scheduleData.upcomingEvents.map((event, index) => (
                        <li key={index}>{event}</li>
                    ))}
                </ul>
            </div>

            <div className="linked-duties">
                <h4>Linked Duties:</h4>
                <ul>
                    {scheduleData.linkedDuties.map((duty, index) => (
                        <li key={index}>
                            <strong>{duty.dutyID}</strong> - Date: {duty.date} - Status: {duty.status}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="unlinked-duties">
                <h4>Unlinked Duties:</h4>
                <ul>
                    {scheduleData.unlinkedDuties.map((duty, index) => (
                        <li key={index}>
                            <strong>{duty.dutyID}</strong> - Date: {duty.date} - Status: {duty.status}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CurrentSchedule;
