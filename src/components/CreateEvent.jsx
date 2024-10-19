import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { createEvent } from '../services/eventsservice';
import { useNavigate, useParams } from 'react-router-dom'

const CreateEvent = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        title: '',
        date: '',
        description: '',
        link: '',
        type: '',
        location: { lat: 51.505, lng: -0.09 },
        amenity: '',
        street: '',
        city: '',
        country: '',
        state: '',
        postalCode: ''
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
        createEvent(formData).then((response) => {
            navigate('/offline-events');
        });

    };

    const handleLocationSearch = async () => {
        const { amenity, street, city, country, state, postalCode } = formData;
        const query = `${amenity ? `amenity=${amenity}&` : ''}${street ? `street=${street}&` : ''}${city ? `city=${city}&` : ''}${state ? `state=${state}&` : ''}${country ? `country=${country}&` : ''}${postalCode ? `postalcode=${postalCode}&` : ''}`;
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&${query}`);
            const data = await response.json();
            console.log('response from openstreetmap:', data[0].lat, data[0].lon);
            if (data.length > 0) {
                const newLocation = { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
                setFormData({ ...formData, location: newLocation });
            }
        } catch (error) {
            console.error('Error fetching location coordinates:', error);
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

    const MapUpdater = () => {
        const map = useMap();
        React.useEffect(() => {
            if (formData.location) {
                map.setView(formData.location, 13);
            }
        }, [formData.location, map]);
        return null;
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
                    <label className="block text-sm font-medium text-gray-300">Event Type:</label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="">Select Type</option>
                        <option value="offline">Offline</option>
                        <option value="online">Online</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-300">Event Location:</label>
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            name="amenity"
                            value={formData.amenity}
                            onChange={handleChange}
                            placeholder="Amenity"
                            className="mt-1 block w-1/6 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <input
                            type="text"
                            name="street"
                            value={formData.street}
                            onChange={handleChange}
                            placeholder="Street"
                            className="mt-1 block w-1/6 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="City"
                            className="mt-1 block w-1/6 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="State"
                            className="mt-1 block w-1/6 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Country"
                            className="mt-1 block w-1/6 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            placeholder="Postal Code"
                            className="mt-1 block w-1/6 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <button
                            type="button"
                            onClick={handleLocationSearch}
                            className="mt-1 w-1/6 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Search
                        </button>
                    </div>
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
                        <MapUpdater />
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