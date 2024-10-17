import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../HamburgerMenu.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false); // Close dropdown if menu is closed
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/contributors", label: "Contributors ♥️" },
    { to: "/favorites", label: "Favorites ♥️" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <motion.header
      className="bg-gray-900 text-white p-6"
      onClick={closeDropdown} // Close dropdown on clicking outside
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex justify-between items-center mb-6"
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
          <motion.ul className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 flex-wrap">
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

            {/* Dropdown for Events */}
            <div className="relative group">
              <button
                className="dropbtn text-lg font-medium hover:text-purple-400 transition-colors duration-300"
                onClick={toggleDropdown}
              >
                Events
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/offline-events" className="block text-white" onClick={closeDropdown}>
                    Offline Events
                  </Link>
                  <Link to="/virtual-events" className="block text-white" onClick={closeDropdown}>
                    Online Events
                  </Link>
                </div>
              )}
            </div>
          </motion.ul>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;
