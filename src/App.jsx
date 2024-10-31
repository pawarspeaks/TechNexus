import React, { useState } from 'react';
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
import { FavoritesProvider } from './components/FavoritesContext';
import Favorites from './components/Favorites';
import ScrollToTopButton from "./components/ScrollToTopButton";
import CreateEvent from './components/CreateEvent';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ContactForm from './components/ContactForm';

function App() {
  const [filters, setFilters] = useState({ startDate: '', endDate: '', location: '' });

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
                  events={offlineEventsData} 
                  filters={filters} 
                  onFilterChange={handleFilterChange} 
                />
              } 
            />
            <Route 
              path="/virtual-events" 
              element={
                <EventList 
                  events={onlineEventsData} 
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
