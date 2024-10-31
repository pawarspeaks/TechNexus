import React from 'react';
import { useFavorites } from './FavoritesContext.jsx';

function EventCard({ event }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorited = favorites.includes(`${event.id}-${event.location ? 'offline' : 'online'}`);
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  };

  return (
    <div className="event-card bg-gray-800 p-4 rounded-lg shadow-lg">
      {event.image && (
        <img src={event.image} alt={event.title} className="event-image mb-4 rounded-lg" />
      )}
      <div className="event-details">
        <h2 className="text-2xl font-bold text-purple-400 mb-2">{event.title}</h2>
        <p className="event-date text-sm text-gray-400 mb-1">
          {new Date(event.date).toLocaleDateString('en-GB', options)}
        </p>
        <p className="event-location text-sm text-gray-400 mb-1">{event.location}</p>
        <p className="event-description text-gray-300 mb-4">{event.description}</p>
        <div className="flex justify-center h-min items-center">
          <a 
            href={event.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="event-link  text-purple-500 hover:underline"
        <div className="flex items-center">
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="event-link text-purple-500 hover:underline"
          >
            Learn More
          </a>
          <button
          type='button'
            onClick={() => toggleFavorite(`${event.id}-${event.location ? 'offline' : 'online'}`)}
            className={`favorite-btn ml-4 mt-4 h-10 w-10 rounded-full transition-colors duration-300 ${
              isFavorited ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-400'
            }`}
            className={`favorite-btn ml-4 p-2 rounded-full transition-colors duration-300 ${isFavorited ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-400'
              }`}
          >
            {isFavorited ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
