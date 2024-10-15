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
    <div className="flex flex-wrap gap-16 top-10 justify-between">
       <motion.a 
                href="https://devcode-technexus.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src="/images/logos/logo-no-background.png" 
                  alt="TechNexus Logo" 
                  className="h-16 w-auto ml-3 "
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
                  className="h-16 w-auto "
                />
              </motion.a>

              <div className="flex  flex-wrap -mx-4 ml-3">
          <motion.div className="w-full md:w-1/2 px-4 mb-8" variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4 ml-2">Get in Touch</h3>
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
             
            </div>
          </motion.div>
         
        </div>
        </div>
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