import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


function Contact() {
  const currentYear = new Date().getFullYear();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');


  // Email and name validation using regex
  const validateName = (name) => /^[a-zA-Z\s]{2,}$/.test(name);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    // ... (rest of the handleSubmit function remains the same)

    if (!validateName(name)) {
      alert("Please enter a valid name. Name should contain only letters and be at least 2 characters long.");
      return;
    }
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
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
    <>
      <motion.footer
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="bg-gray-900 text-white p-8"
        id="contact"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-purple-400"
            variants={itemVariants}
          >
            Contact Us
          </motion.h2>
          <div className="flex justify-center flex-wrap -mx-4">

            <motion.div className="w-full  md:w-1/2 px-4" variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full p-2 bg-gray-800 rounded"
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px #bb86fc" }}
                />
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full p-2 bg-gray-800 rounded"
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px #bb86fc" }}
                />
                <motion.textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-2 bg-gray-800 rounded"
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px #bb86fc" }}
                ></motion.textarea>
                <div className="text-center">
                  <motion.button
                    type="submit"
                    className="bg-purple-500   text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
              <AnimatePresence>
                {msg && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-400 mt-4"
                  >
                    {msg}
                  </motion.p>
                )}
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-400 mt-4"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </motion.footer>
    </>
  );
}
export default Contact;