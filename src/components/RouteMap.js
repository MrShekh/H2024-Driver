// src/components/RouteMap.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';

// Set default icon for markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const RouteMap = () => {
    const [position, setPosition] = useState([28.6139, 77.2090]); // Default position for Delhi
    const [searchQuery, setSearchQuery] = useState('');
    const [markers, setMarkers] = useState([]);

    // Coordinates for the bus stops along the route
    const busStops = [
        { name: "YMCA / Palika Kendra", coords: [28.6293, 77.2176] },
        { name: "Palika Kendra", coords: [28.6301, 77.2173] },
        { name: "Shivaji Park", coords: [28.6379, 77.2334] },
        { name: "Vivekanand Marg / Minto Road", coords: [28.6405, 77.2346] },
        { name: "JLN Marg (Jawaharlal Nehru Marg)", coords: [28.6435, 77.2380] },
        { name: "Zakir Husain College", coords: [28.6457, 77.2398] },
        { name: "Turkman Gate / GB Pant Hospital", coords: [28.6490, 77.2437] },
        { name: "Delite Cinema", coords: [28.6506, 77.2447] },
        { name: "Delhi Gate", coords: [28.6509, 77.2427] },
        { name: "Golcha Darya Ganj", coords: [28.6515, 77.2395] },
        { name: "Subhash Park", coords: [28.6545, 77.2369] },
        { name: "Jama Masjid", coords: [28.6507, 77.2334] }
    ];

    // Extract coordinates for polyline
    const lineCoordinates = busStops.map(stop => stop.coords);

    // Function to handle search
    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://gomaps.pro/api/geocode?address=${searchQuery}&key=AlzaSyiDyuVehTzN_9Xh-KH5-7bu_MMeH7IZlgY`);
            const locations = response.data.results;

            if (locations.length > 0) {
                const newPosition = [
                    locations[0].geometry.location.lat,
                    locations[0].geometry.location.lng,
                ];
                setPosition(newPosition);
                setMarkers(locations.map(location => ({
                    position: [location.geometry.location.lat, location.geometry.location.lng],
                    name: location.formatted_address,
                })));
            } else {
                alert('No results found');
            }
        } catch (error) {
            console.error('Error fetching data from Gomaps:', error);
            alert('Failed to fetch data. Please try again later.');
        }
    };

    return (
        <div className="route-map">
            <h3>Route Map</h3>
            <input
                type="text"
                placeholder="Search for a location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                style={{ marginBottom: '10px', padding: '8px', width: '300px' }}
            />
            <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* Add markers for each bus stop */}
                {busStops.map((stop, index) => (
                    <Marker key={index} position={stop.coords}>
                        <Popup>
                            <strong>Bus Stop:</strong> {stop.name}
                        </Popup>
                    </Marker>
                ))}
                {/* Draw polyline connecting the bus stops */}
                <Polyline positions={lineCoordinates} color="blue" />
            </MapContainer>
        </div>
    );
};

export default RouteMap;
