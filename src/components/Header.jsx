import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../HamburgerMenu.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/offline-events", label: "Offline Events" },
    { to: "/virtual-events", label: "Online Events" },
    { to: "/contributors", label: "Contributors ♥️" },
    { to: "/favorites", label: "Favorites ♥️" },
    { to: "/contact", label: "Contact" }
  ];

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
          {/* Logo 1 */}
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

          {/* Logo 2 */}
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

          {/* Hamburger Icon */}
          <div className="hamburger-icon md:hidden" onClick={toggleMenu}>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          </div>
        </motion.div>

        {/* Navigation Menu */}
        <nav className={`md:flex md:justify-center md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <motion.ul 
            className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 flex-wrap"
            variants={itemVariants}
          >
            {navItems.map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={item.to}
                  className="text-lg font-medium hover:text-purple-400 transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;
