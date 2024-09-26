import React, { useState } from 'react';
import './Dashboard.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Mon', trips: 12, rating: 4.5 },
    { name: 'Tue', trips: 10, rating: 4.2 },
    { name: 'Wed', trips: 15, rating: 4.8 },
    { name: 'Thu', trips: 20, rating: 4.3 },
    { name: 'Fri', trips: 18, rating: 4.7 },
    { name: 'Sat', trips: 22, rating: 4.6 },
    { name: 'Sun', trips: 25, rating: 4.9 },
];

const taskProgressData = [
    { task: 'Task 1', progress: 65 },
    { task: 'Task 2', progress: 80 },
    { task: 'Task 3', progress: 50 },
];

const taskTimelineData = [
    { task: 'Task 1', start: '2024-09-24', end: '2024-09-26' },
    { task: 'Task 2', start: '2024-09-25', end: '2024-09-28' },
];

const Dashboard = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="dashboard-grid">
                {/* Today Tasks Section */}
                <div className="dashboard-item tasks">
                    <h2>Today Tasks</h2>
                    <div className="task-cards">
                        <div className="task-card">
                            <h3>Task 1</h3>
                            <p>Information of task 1.</p>
                            <div className="task-progress-bar">
                                <div className="progress" style={{ width: '65%' }}></div>
                            </div>
                        </div>
                        <div className="task-card">
                            <h3>Task 2</h3>
                            <p>Information about task 2.</p>
                            <div className="task-progress-bar">
                                <div className="progress" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Calendar Section */}
                <div className="dashboard-item calendar">
                    <h2>Calendar</h2>
                    <Calendar onChange={setDate} value={date} />
                </div>

                {/* Performance Metrics Section */}
                <div className="dashboard-item">
                    <h2>Performance Metrics</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="trips" stroke="#8884d8" />
                            <Line type="monotone" dataKey="rating" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Task Progress Section */}
                <div className="dashboard-item task-progress">
                    <h2>Task Progress</h2>
                    {taskProgressData.map((task, index) => (
                        <div key={index} className="task-card">
                            <h3>{task.task}</h3>
                            <div className="task-progress-bar">
                                <div className="progress" style={{ width: `${task.progress}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Task Timeline Section */}
                <div className="dashboard-item task-timeline">
                    <h2>Task Timeline</h2>
                    <ul className="timeline">
                        {taskTimelineData.map((task, index) => (
                            <li key={index} className="timeline-item">
                                <div className="timeline-content">
                                    <strong>{task.task}</strong>: <span>{task.start} - {task.end}</span>
                                </div>
                                <div className="timeline-line"></div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
