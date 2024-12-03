import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import locationsData from '../data/offlineEventsData.json';

function FilterForm({ filters, onFilterChange, onReset }) {
  const location = useLocation();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const uniqueLocations = Array.from(new Set(locationsData.map(item=>item.location)));
    setLocations(uniqueLocations); // Set the unique locations to state variable
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  const handleReset = () => {
    onReset(); // Call the reset function passed from EventList
  };

  const formVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.form
      className="filter-form bg-gray-900 p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Event Name Filter */}
      <motion.div className="mb-6" variants={inputVariants}>
        <label htmlFor="sort-event-name" className="block text-purple-400 mb-2">Event Name:</label>
        <motion.input
          type="text"
          id="sort-event-name"
          name="eventName"
          value={filters.eventName}
          placeholder="Search by event name"
          onChange={handleInputChange}
          className="w-full bg-gray-800 text-white p-2 rounded border border-purple-500 focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
          whileFocus={{ scale: 1.02 }}
        />
      </motion.div>

      {/* Start Date Filter */}
      <motion.div className="mb-6" variants={inputVariants}>
        <label htmlFor="sort-start-date" className="block text-purple-400 mb-2">Start Date:</label>
        <motion.input
          type="date"
          id="sort-start-date"
          name="startDate"
          value={filters.startDate}
          onChange={handleInputChange}
          className="w-full bg-gray-800 text-white p-2 rounded border border-purple-500 focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
          whileFocus={{ scale: 1.02 }}
        />
      </motion.div>

      {/* End Date Filter */}
      <motion.div className="mb-6" variants={inputVariants}>
        <label htmlFor="sort-end-date" className="block text-purple-400 mb-2">End Date:</label>
        <motion.input
          type="date"
          id="sort-end-date"
          name="endDate"
          value={filters.endDate}
          onChange={handleInputChange}
          className="w-full bg-gray-800 text-white p-2 rounded border border-purple-500 focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
          whileFocus={{ scale: 1.02 }}
        />
      </motion.div>

      {/* Sort By Filter */}
      <motion.div className="mb-6" variants={inputVariants}>
        <label htmlFor="sort-by" className="block text-purple-400 mb-2">
          Sort By:
        </label>
        <motion.select
          id="sort-by"
          name="sortBy"
          onChange={handleInputChange}
          className="w-full bg-gray-800 text-white p-2 rounded border border-purple-500 focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
          whileFocus={{ scale: 1.02 }}
          defaultValue="earliest"
        >
          <motion.option className="w-full" value="" selected>Select</motion.option>
          <motion.option className="w-full" value="earliest">Earliest Events</motion.option>
          <motion.option className="w-full" value="upcoming">Upcoming Events</motion.option>
        </motion.select>
      </motion.div>

      {/* Location Filter (Dropdown with unique locations fetched from offline events json file) */}
      <AnimatePresence>
        {location.pathname !== '/virtual-events' && (
          <motion.div 
            className="mb-6" 
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <label htmlFor="sort-location" className="block text-purple-400 mb-2">Location:</label>
            <motion.select  
              //type="text"
              id="sort-location"
              name="location"
              value={filters.location}
              //placeholder="Search by location"
              onChange={handleInputChange}
              className="w-full bg-gray-800 text-white p-2 rounded border border-purple-500 focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
              whileFocus={{ scale: 1.02 }}
            >
            <motion.option value="">Select Location</motion.option>
              {locations.map((loc, index) => (  // <-- Populating the dropdown with unique locations
                <motion.option key={index} value={loc}>
                  {loc}
                </motion.option>
              ))}
            </motion.select>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reset Button */}
      <motion.button
        onClick={handleReset}
        className="mt-4 px-4 py-2 w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600 transition-colors duration-300"
      >
        Reset Filters
      </motion.button>
    </motion.form>
  );
}

export default FilterForm;
