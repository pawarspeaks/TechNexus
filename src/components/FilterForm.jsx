import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function FilterForm({ filters, onFilterChange, onSearch }) {
  const location = useLocation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearch();
    }
  };

  const handleButtonClick = () => {
    onSearch();
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
      onKeyPress={handleSearch}
    >
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
            <motion.input
              type="text"
              id="sort-location"
              name="location"
              value={filters.location}
              placeholder="Search by location"
              onChange={handleInputChange}
              className="w-full bg-gray-800 text-white p-2 rounded border border-purple-500 focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600 transition-colors duration-300"
        onClick={handleButtonClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Apply Filters
      </motion.button>
    </motion.form>
  );
}

export default FilterForm;