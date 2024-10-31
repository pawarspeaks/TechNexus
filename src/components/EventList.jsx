import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EventCard from './EventCard';
import FilterForm from './FilterForm';
import { Link } from 'react-router-dom';

function EventList({ events }) {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 10;
  const initialFilters = { eventName: '', startDate: '', endDate: '', location: '', sortBy: '' };
  const [filters, setFilters] = useState(initialFilters);

  // Filter the events based on the provided filters
  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const startDate = filters.startDate ? new Date(filters.startDate) : null;
    const endDate = filters.endDate ? new Date(filters.endDate) : null;

    const datePass =
      (!startDate || eventDate >= startDate) &&
      (!endDate || eventDate <= endDate);

    const locationPass =
      !filters.location ||
      event.location.toLowerCase().includes(filters.location.toLowerCase());

    const namePass =
      !filters.eventName ||
      event.title.toLowerCase().includes(filters.eventName.toLowerCase());

    return datePass && locationPass && namePass;
  }).sort((a, b) => {
    const firstDate = new Date(a.date);
    const secondDate = new Date(b.date);
    if (filters.sortBy === 'earliest') {
      return firstDate.getTime() - secondDate.getTime();
    } else if (filters.sortBy === 'upcoming') {
      return secondDate.getTime() - firstDate.getTime();
    } else {
      return 0;
    }
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  // Get the events for the current page
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  // Handle navigation between pages
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters(initialFilters);
    // setCurrentPage();
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl font-bold text-center mb-8 text-purple-400"
          variants={itemVariants}
        >
          Event List
        </motion.h1>

        {/* Link to Create Event Page */}
        <motion.div className="mb-8 text-center" variants={itemVariants}>
          <Link
            to="/createevent"
            className="inline-block px-4 py-2 bg-purple-600 text-white font-semibold rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Create New Event
          </Link>
        </motion.div>


        {/* Filter Form */}
        <motion.div variants={itemVariants}>
          <FilterForm filters={filters} onFilterChange={handleFilterChange} onReset={handleResetFilters} />
        </motion.div>

        {/* Display paginated events */}
        <AnimatePresence>
          {paginatedEvents.length > 0 ? (
            <motion.div
              className="grid gap-6 mt-8"
              variants={containerVariants}
            >
              {paginatedEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <EventCard event={event} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.p
              variants={itemVariants}
              className="text-center text-xl mt-8"
            >
              No events found matching the filters.
            </motion.p>
          )}
        </AnimatePresence>

        {/* Pagination Controls */}
        {filteredEvents.length > eventsPerPage && (
          <motion.div
            className="flex justify-center items-center space-x-4 mt-8"
            variants={itemVariants}
          >
            <motion.button
              onClick={goToFirstPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-full ${currentPage === 1
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-purple-500 hover:bg-purple-600'
                } transition-colors duration-300`}
              whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
              whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
            >
              First
            </motion.button>

            <motion.button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-full ${currentPage === 1
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-purple-500 hover:bg-purple-600'
                } transition-colors duration-300`}
              whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
              whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
            >
              Previous
            </motion.button>

            <span className="text-lg">
              Page {currentPage} of {totalPages}
            </span>

            <motion.button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-full ${currentPage === totalPages
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-purple-500 hover:bg-purple-600'
                } transition-colors duration-300`}
              whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
              whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
            >
              Next
            </motion.button>

            <motion.button
              onClick={goToLastPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-full ${currentPage === totalPages
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-purple-500 hover:bg-purple-600'
                } transition-colors duration-300`}
              whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
              whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
            >
              Last
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default EventList;
