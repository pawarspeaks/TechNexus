import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ContributorsPage() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedContributor, setSelectedContributor] = useState(null);
  const GITHUB_TOKEN = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/pawarspeaks/TechNexus/contributors', {
          method: 'GET',
          headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
          },
        });

        if (response.status === 403) {
          const resetTime = new Date(response.headers.get('X-RateLimit-Reset') * 1000);
          throw new Error(`API rate limit exceeded. Try again after ${resetTime.toLocaleTimeString()}`);
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setContributors(data);
      } catch (e) {
        setError(e.message || 'Failed to fetch contributors');
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  if (loading) return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex justify-center items-center h-screen"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
      />
    </motion.div>
  );

  if (error) return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center p-8 text-red-500 text-xl"
    >
      {error}
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 bg-gray-900 min-h-screen"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-4xl font-bold text-center mb-12 text-purple-400"
      >
        Our Amazing Contributors ♥️
      </motion.h1>
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {contributors.map((contributor) => (
          <motion.div
            key={contributor.id}
            layoutId={`card-${contributor.id}`}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(187, 134, 252, 0.3)" }}
            className="bg-gray-800 rounded-lg p-6 flex flex-col items-center cursor-pointer"
            onClick={() => setSelectedContributor(contributor)}
          >
            <motion.img
              whileHover={{ scale: 1.1, rotate: 360, transition: { duration: 0.5 } }}
              src={contributor.avatar_url}
              alt={`${contributor.login}'s avatar`}
              className="w-32 h-32 rounded-full border-4 border-purple-500 mb-4"
            />
            <h2 className="text-xl font-semibold text-purple-400 mb-2">{contributor.login}</h2>
            <p className="text-gray-400 mb-4">Contributions: {contributor.contributions}</p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={contributor.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
            >
              GitHub Profile
            </motion.a>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedContributor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedContributor(null)}
          >
            <motion.div
              layoutId={`card-${selectedContributor.id}`}
              className="bg-gray-800 rounded-lg p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={selectedContributor.avatar_url}
                alt={`${selectedContributor.login}'s avatar`}
                className="w-40 h-40 rounded-full border-4 border-purple-500 mb-4 mx-auto"
              />
              <h2 className="text-2xl font-bold text-purple-400 mb-4 text-center">{selectedContributor.login}</h2>
              <p className="text-gray-300 mb-4 text-center">Contributions: {selectedContributor.contributions}</p>
              <div className="flex justify-center space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={selectedContributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
                >
                  GitHub Profile
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedContributor(null)}
                  className="bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ContributorsPage;