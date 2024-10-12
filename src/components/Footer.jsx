import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // ... (rest of the handleSubmit function remains the same)
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 20,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gray-900 text-white p-8"
      id="contact"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <p>&copy; {currentYear} Dev Code &amp; TechNexus | Made with ♥️</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;