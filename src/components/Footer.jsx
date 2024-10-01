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
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-purple-400"
          variants={itemVariants}
        >
          Contact Us
        </motion.h2>
        <div className="flex flex-wrap -mx-4">
          <motion.div className="w-full md:w-1/2 px-4 mb-8" variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <motion.p 
              className="mb-2"
              whileHover={{ scale: 1.05, color: "#bb86fc" }}
            >
              <i className="fa-sharp fa-solid fa-paper-plane mr-2"></i>
              <a href="mailto:iampratappawar@gmail.com">iampratappawar@gmail.com</a>
            </motion.p>
            <motion.p 
              className="mb-4"
              whileHover={{ scale: 1.05, color: "#bb86fc" }}
            >
              <i className="fa-sharp fa-solid fa-paper-plane mr-2"></i>
              <a href="mailto:devcode.community@gmail.com">devcode.community@gmail.com</a>
            </motion.p>
            <div className="flex space-x-4 mb-8">
              {[
                { name: 'instagram', link: 'https://www.instagram.com/dev_codecommunity/' },
                { name: 'linkedin', link: 'https://www.linkedin.com/company/dev-code-community/' },
                { name: 'twitter', link: 'https://twitter.com/devcodecommunity' },
                { name: 'github', link: 'https://github.com/Dev-Code-Community' }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl"
                >
                  <i className={`fa-brands fa-${social.name}`}></i>
                </motion.a>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <motion.a 
                href="https://devcode-technexus.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src="/images/logos/logo-no-background.png" 
                  alt="TechNexus Logo" 
                  className="h-16 w-auto"
                />
              </motion.a>
              <motion.a 
                href="https://dev-code-community.github.io/bio/" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src="/images/logos/DevCode-without-BG.png" 
                  alt="Dev Code Logo" 
                  className="h-16 w-auto"
                />
              </motion.a>
            </div>
          </motion.div>
          <motion.div className="w-full md:w-1/2 px-4" variants={itemVariants}>
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
              <motion.button
                type="submit"
                className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
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