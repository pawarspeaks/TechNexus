import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormSubmitted(true);
  };
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col bg-gray-900 min-h-screen p-8 text-white space-y-8 items-center justify-evenly">
      <motion.h1
        className="text-5xl font-bold text-center text-purple-400 mb-8"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        Contact Us
      </motion.h1>

      <div className="flex flex-col lg:flex-row w-full lg:space-x-16 space-y-8 lg:space-y-0 items-center">
        <motion.div
          className="flex-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-4xl font-bold mb-4 text-purple-400"
            variants={itemVariants}
          >
            Let&apos;s Talk
          </motion.h2>
          <motion.p className="mb-4 text-gray-400" variants={itemVariants}>
            Have some big idea or brand to develop and need help? Then reach
            out, we&apos;d love to hear about your project and provide help.
          </motion.p>

          <motion.div className="mb-6" variants={itemVariants}>
            <h2 className="text-lg font-semibold">Email</h2>
            <div className="flex items-center space-x-3 mt-2">
              <div className="bg-purple-500 rounded-full p-2">
                <MdEmail />
              </div>
              <motion.p
                className=""
                whileHover={{ scale: 1.05, color: "#bb86fc" }}
              >
                <a href="mailto:iampratappawar@gmail.com">
                  iampratappawar@gmail.com
                </a>
              </motion.p>
            </div>
            <div className="flex items-center space-x-3 mt-2">
              <div className="bg-purple-500 rounded-full p-2">
                <MdEmail />
              </div>
              <motion.p
                className=""
                whileHover={{ scale: 1.05, color: "#bb86fc" }}
              >
                <a href="mailto:devcode.community@gmail.com">
                  devcode.community@gmail.com
                </a>
              </motion.p>
            </div>
          </motion.div>

          <motion.div className="mt-4" variants={itemVariants}>
            <h2 className="text-lg font-semibold">Socials</h2>
            <div className="flex space-x-4 mt-2">
              <motion.div whileHover={{ scale: 1.1 }}>
                <FaFacebook size={30} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <FaLinkedin size={30} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <FaInstagram size={30} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {formSubmitted ? (
            <motion.p
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center text-lg text-green-400"
            >
              Thank you for reaching out! We will get back to you soon.
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                variants={itemVariants}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                variants={itemVariants}
              />
              <motion.input
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                variants={itemVariants}
              />
              <motion.textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                variants={itemVariants}
              />
              <motion.button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 transition-colors duration-300 text-white p-4 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                Send
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default ContactForm;
