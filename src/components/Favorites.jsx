import React from 'react';
import EventCard from './EventCard';
import { useFavorites } from './FavoritesContext.jsx';
import offlineEventsData from '../data/offlineEventsData.json'; // Adjust this path based on your structure
import onlineEventsData from '../data/onlineEventsData.json'; // Adjust this path based on your structure

const Favorites = () => {
  const { favorites } = useFavorites();
  const allEvents = [...offlineEventsData, ...onlineEventsData];

  const favoriteEvents = allEvents.filter(event => favorites.includes(`${event.id}-${event.location ? 'offline' : 'online'}`));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Favorite Events</h1>
      {favoriteEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoriteEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-300 text-center">No favorite events found.</p>
      )}
    </div>
  );
};

export default Favorites;
