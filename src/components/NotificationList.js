// src/components/NotificationList.js
import React, { useState } from 'react';
import './NotificationList.css';

const NotificationList = () => {
    const [notifications, setNotifications] = useState([
        { message: "Admin: New bus route changes have been implemented", time: "49m" },
        { message: "Admin: Bus schedule updated for Route 5", time: "2h" },
        { message: "Admin: Maintenance required on Bus #10", time: "2h" },
        { message: "Admin: Traffic expected on Route 7 tomorrow", time: "2h" },
        { message: "Admin: Your bus shift starts at 9 AM tomorrow", time: "7h" },
    ]);

    const [selectedNotification, setSelectedNotification] = useState(null);

    const handleClick = (notification) => {
        setSelectedNotification(notification);
    };

    return (
        <div className="notification-section">
            <div className="notification-list">
                {notifications.map((notification, index) => (
                    <div
                        key={index}
                        className="notification-item"
                        onClick={() => handleClick(notification)}
                    >
                        <div className="notification-content">
                            <p>{notification.message}</p>
                            <span>{notification.time}</span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedNotification && (
                <div className="notification-detail">
                    <h3>Notification Detail</h3>
                    <p>{selectedNotification.message}</p>
                    <span>{selectedNotification.time}</span>
                </div>
            )}
        </div>
    );
};

export default NotificationList;
