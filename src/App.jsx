import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import EventList from './components/EventList';
import Footer from './components/Footer';
import ContributorsPage from './pages/ContributorsPage';
import Contact from './pages/Contact';
import offlineEventsData from './data/offlineEventsData.json';
import onlineEventsData from './data/onlineEventsData.json';
import HomePage from './components/HomePage'; 
import './index.css';

import ContactForm from './components/ContactForm';

function App() {
  const [offlineEvents, setOfflineEvents] = useState([]);
  const [onlineEvents, setOnlineEvents] = useState([]);
  const [filters, setFilters] = useState({ startDate: '', endDate: '', location: '' });

  // Load offline events from JSON
  useEffect(() => {
    setOfflineEvents(offlineEventsData);
  }, []);

  // Load online events from JSON
  useEffect(() => {
    setOnlineEvents(onlineEventsData);
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    
      <div className="App">
        <Header />
        <ScrollToTopButton/>
        <main className="container">
        <Routes>
        {/* Home Route (Displays the Introductory Home Page) */}
        <Route path="/" element={<HomePage />} />

        {/* Route for Offline Events */}
        <Route 
          path="/offline-events" 
          element={
            <EventList 
              events={offlineEvents} 
              filters={filters} 
              onFilterChange={handleFilterChange} 
            />
          } 
        />

        {/* Route for Online Events */}
        <Route 
          path="/virtual-events" 
          element={
            <EventList 
              events={onlineEvents} 
              filters={filters} 
              onFilterChange={handleFilterChange} 
            />
          } 
        />

        {/* Route for Contributors Page */}
        <Route path="/contributors" element={<ContributorsPage />} />

        <Route path="/contact" element={<ContactForm />} />

      </Routes>

        </main>
       
        <Footer />
        
      </div>
   

  );
}

export default App;
