import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  const containerVariants = {
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

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.header 
      className="bg-gray-900 text-white p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="flex justify-between items-center mb-6"
          variants={itemVariants}
        >
          <motion.a 
            href="https://devcode-technexus.vercel.app/" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img 
              src="/images/logos/logo-no-background.png" 
              alt="TechNexus Logo" 
              className="h-16 w-auto"
              whileHover={{ rotate: 5 }}
            />
          </motion.a>

          <motion.a 
            href="https://dev-code-community.github.io/bio/" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img 
              src="/images/logos/DevCode-without-BG.png" 
              alt="Dev Code Logo" 
              className="h-16 w-auto"
              whileHover={{ rotate: -5 }}
            />
          </motion.a>
        </motion.div>

        <nav>
          <motion.ul 
            className="flex justify-center space-x-6 flex-wrap"
            variants={itemVariants}
          >
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/" 
                className="text-lg font-medium hover:text-purple-400 transition-colors duration-300"
              >
                Home
              </Link>
            </motion.li>

            {/* Dropdown for Events */}
            <motion.li className="relative group" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <span className="text-lg font-medium hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                Events
              </span>
              <motion.ul className="absolute left-0 mt-2 bg-gray-800 rounded-lg p-2 invisible group-hover:visible transition-all duration-300">
                <motion.li whileHover={{ scale: 1.1 }}>
                  <Link 
                    to="/offline-events" 
                    className="block text-lg font-medium text-white hover:text-purple-400 transition-colors duration-300"
                  >
                    Offline Events
                  </Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                  <Link 
                    to="/virtual-events" 
                    className="block text-lg font-medium text-white hover:text-purple-400 transition-colors duration-300"
                  >
                    Online Events
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contributors" 
                className="text-lg font-medium hover:text-purple-400 transition-colors duration-300"
              >
                Contributors ♥️
              </Link>
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a 
                href="#contact" 
                className="text-lg font-medium hover:text-purple-400 transition-colors duration-300"
              >
                Contact
              </a>
            </motion.li>
          </motion.ul>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;
