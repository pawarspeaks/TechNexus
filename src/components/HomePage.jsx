import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabContent = {
    about: {
      title: "About TechNexus",
      content: "TechNexus is a vibrant ecosystem where tech enthusiasts, developers, and innovators converge. Our community-driven platform showcases a diverse array of technology events from around the globe, fostering connections and driving innovation."
    },
    events: {
      title: "Featured Events",
      content: "Discover cutting-edge tech conferences, workshops, and meetups. From AI and blockchain to cybersecurity and DevOps, TechNexus brings you events that shape the future of technology."
    },
    contribute: {
      title: "Contribute Year-Round",
      content: (
        <>
          <p className="mb-6">
            The spirit of open-source collaboration doesn't end with Hacktoberfest or any open source event. At TechNexus, we believe in fostering a community of continuous contribution. Your input shapes the future of our global tech community.
          </p>
          <p className="mb-6 text-lg font-semibold text-blue-300">
            Have a look at our superheroes empowering the tech space by their valuable contributions:
          </p>
          <Link to="/contributors">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1"
            >
              Meet Our Contributors
            </motion.button>
          </Link>
        </>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans p-8">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20"
      >
        <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Welcome to TechNexus
        </h1>
        <p className="text-2xl mb-12 text-gray-300">Your Global Tech Event Hub by Dev Code Community</p>
        <div className="space-x-4">
          <motion.a 
            href="https://github.com/pawarspeaks/TechNexus/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(59, 130, 246)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              Join the Movement
            </motion.button>
          </motion.a>

          <Link to="/virtual-events">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255, 255, 255)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full border-2 border-white transition-all duration-300"
            >
              Explore Events
            </motion.button>
          </Link>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-20"
      >
        <div className="flex justify-center space-x-4 mb-8">
          {Object.keys(tabContent).map((tab) => (
            <motion.button
              key={tab}
              className={`px-4 py-2 rounded-full ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4">{tabContent[activeTab].title}</h2>
            <div className="text-lg text-gray-300">{tabContent[activeTab].content}</div>
          </motion.div>
        </AnimatePresence>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-20"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Discover", icon: "🔍", description: "Find exciting tech events happening around the globe." },
            { title: "Connect", icon: "🤝", description: "Network with like-minded professionals and enthusiasts." },
            { title: "Contribute", icon: "🚀", description: "Add events, share knowledge, and grow the community." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg text-center"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(59, 130, 246, 0.5)" }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-20 bg-gray-800 rounded-lg shadow-lg"
      >
        <div className="flex flex-col md:flex-row items-center justify-between px-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Dev Code Community</h2>
            <p className="text-lg text-gray-300 mb-6">
              Dev Code Community is a passionate group of developers and tech enthusiasts dedicated to fostering growth, collaboration, and innovation in the tech world. Our mission is to create a supportive environment where members can learn, share knowledge, and contribute to exciting open-source projects like TechNexus.
            </p>
            <motion.a 
              href="https://dev-code-community.github.io/bio/"
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              Join Dev Code Community
            </motion.a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.a
              href="https://dev-code-community.github.io/bio/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="../../src/images/logos/DevCode-without-BG.png" alt="Dev Code Logo" className="max-w-full h-auto" />
            </motion.a>
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="py-20 text-center"
      >
        <h2 className="text-4xl font-bold mb-8">Ready to dive in?</h2>
        <motion.a 
          href="https://github.com/pawarspeaks/TechNexus/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgb(16, 185, 129)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-xl transition-all duration-300"
          >
            Get Started Now
          </motion.button>
        </motion.a>
      </motion.section>

      <footer className="mt-20 text-center text-gray-400">
        <p>TechNexus - An initiative by Dev Code Community</p>
        <p className="mt-2">
          <a href="https://devcode-technexus.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            devcode-technexus.vercel.app
          </a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;