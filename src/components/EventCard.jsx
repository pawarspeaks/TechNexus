import React from 'react';

function EventCard({ event }) {
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  };
  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} className="event-image" />
      <div className="event-details">
        <h2>{event.title}</h2>
        <p className="event-date">{new Date(event.date).toLocaleDateString('en-GB', options)}</p>
        <p className="event-location">{event.location}</p>
        <p className="event-description">{event.description}</p>
        <a href={event.link} target="_blank" rel="noopener noreferrer" className="event-link">Learn More</a>
      </div>
    </div>
  );
}

export default EventCard;
