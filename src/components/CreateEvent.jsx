import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './CreateEvent.css'; // Import the CSS file

const CreateEvent = () => {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        description: '',
        link: '',
        location: { lat: 12.97679125932766, lng: 437.583389282226 },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) =>
        ({
            ...formData,
            [name]: value
        }));
    };

    const handleMapClick = (e) => {
        console.log(e.latlng);
        setFormData({ ...formData, location: e.latlng });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const response = await fetch('http://localhost:3000/api/events', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData),
            // });
            // if (!response.ok) {
            //     throw new Error('Network response was not ok');
            // }

            alert('Event created successfully!');
        } catch (error) {
            console.error('Error creating event:', error);
            alert('Error creating event');
        }
    };

    const LocationMarker = () => {
        useMapEvents({
            click: handleMapClick,
        });

        return formData.location === null ? null : (
            <Marker position={formData.location}></Marker>
        );
    };

    return (
        <div className="create-event container">
            <h2 className="text-2xl font-bold mb-4">Create New Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-300">Event Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-300">Event Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-300">Event Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    ></textarea>
                </div>
                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-300">Event Link:</label>
                    <input
                        type="url"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-300">Event Location:</label>
                    <MapContainer
                        center={formData.location}
                        zoom={13}
                        style={{ height: '300px', width: '100%' }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <LocationMarker />
                    </MapContainer>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Create Event
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;