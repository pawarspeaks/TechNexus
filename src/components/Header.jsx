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
      className="bg-gray-900 text-white p-6 fixed top-0 left-0 w-full z-50 transition duration-300"
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
            {[
              { to: "/", label: "Home" },
              { to: "/offline-events", label: "Offline Events" },
              { to: "/virtual-events", label: "Online Events" },
              { to: "/contributors", label: "Contributors ♥️" },
              { href: "#contact", label: "Contact" }
            ].map((item, index) => (
              <motion.li 
                key={index} 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.to ? (
                  <Link 
                    to={item.to} 
                    className="text-lg font-medium transition duration-300 hover:text-purple-400"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a 
                    href={item.href} 
                    className="text-lg font-medium transition duration-300 hover:text-purple-400"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      const target = document.querySelector(item.href);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.label}
                  </a>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;
