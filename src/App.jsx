import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import EventList from './components/EventList';
import Footer from './components/Footer';
import ContributorsPage from './pages/ContributorsPage';
import Contact from './pages/Contact';
import offlineEventsData from './data/offlineEventsData.json';
import onlineEventsData from './data/onlineEventsData.json';
import HomePage from './components/HomePage';
import './index.css';
import { fetchOfflineEvents, fetchOnlineEvents } from './services/eventsservice';
import { FavoritesProvider } from './components/FavoritesContext';
import './index.css';
import Favorites from './components/Favorites';
import ScrollToTopButton from "./components/ScrollToTopButton";
import CreateEvent from './components/CreateEvent';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ContactForm from './components/ContactForm';

function App() {
  const [offlineEvents, setOfflineEvents] = useState([]);
  const [onlineEvents, setOnlineEvents] = useState([]);
  const [filters, setFilters] = useState({ startDate: '', endDate: '', location: '' });

  useEffect(() => {
    const loadOfflineEvents = async () => {
      try {
        const data = await fetchOfflineEvents();
        setOfflineEvents(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadOfflineEvents();
  }, []);

  useEffect(() => {
    const loadOnlineEvents = async () => {
      try {
        const data = await fetchOnlineEvents();
        setOnlineEvents(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadOnlineEvents();
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <FavoritesProvider>
      <div className="App">
        <Header />
        <ScrollToTopButton />
        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
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
            <Route path="/createevent" element={<CreateEvent />} />
            
            <Route path="/contributors" element={<ContributorsPage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </FavoritesProvider>
  );
}

export default App;
