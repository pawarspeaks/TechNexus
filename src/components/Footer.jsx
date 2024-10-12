import React from 'react';
import { Instagram, Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center md:text-left md:items-start md:flex-row md:justify-between gap-8">

        {/* Newsletter Subscription */}
        <div className="text-center md:text-left mb-8">
          <h2 className="text-3xl font-bold mb-4 transition-all duration-300 hover:text-gray-300">
            Unlock Exclusive Updates!
          </h2>
          <div className="flex justify-center md:justify-start items-center bg-[#1c1c3d] rounded-full border border-gray-500 px-4 py-3">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent text-lg text-white placeholder-gray-400 w-full focus:outline-none pr-6"
            />
            <div className="bg-white text-black rounded-full p-2 transition-transform duration-300 transform hover:scale-125 hover:bg-[#24246a] hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.5 5.25L18 8M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
              </svg>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-base text-gray-400 mb-4">FOLLOW US:</p>
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                { icon: Instagram, name: 'Instagram', link: 'https://www.instagram.com/dev_codecommunity/' },
                { icon: Linkedin, name: 'LinkedIn', link: 'https://www.linkedin.com/company/dev-code-community/' },
                { icon: Github, name: 'GitHub', link: 'https://github.com/Dev-Code-Community' },
                { icon: Twitter, name: 'Twitter', link: 'https://twitter.com/devcodecommunity' },
              ].map(({ icon: Icon, name, link }) => (
                <a 
                  key={name} 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors duration-300"
                  aria-label={name}
                >
                  <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center transition-transform duration-300 transform hover:scale-125 hover:bg-white hover:text-[#0c0c21]">
                    <Icon className="h-5 w-5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left mb-8">
          <h3 className="text-3xl font-semibold mb-4">Share</h3>
          <ul className="space-y-2">
            {[
              // if you want add more sharing links ovr here ,also change the codddde a bit as i dont have your reddit etc.
              { name: 'X (Twitter)', link: 'https://twitter.com/share?url=https://twitter.com/devcodecommunity' },
              { name: 'Facebook', link: 'https://www.facebook.com/sharer/sharer.php?u=YOUR_URL' },
              { name: 'LinkedIn', link: 'https://www.linkedin.com/shareArticle?mini=true&url=YOUR_URL&title=YOUR_TITLE' },
              { name: 'Reddit', link: 'https://reddit.com/submit?url=YOUR_URL&title=YOUR_TITLE' }
            ].map(({ name, link }) => (
              <li key={name}>
                <a 
                  href={link.replace('YOUR_URL', encodeURIComponent(window.location.href)).replace('YOUR_TEXT', encodeURIComponent('Check this out!')).replace('YOUR_TITLE', encodeURIComponent('Your Title Here'))} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative inline-block text-white transition-colors duration-300 items-center justify-center md:justify-start before:absolute before:left-[50%] before:-bottom-[1px] before:w-full before:h-[2px] before:bg-transparent before:transform before:-translate-x-[50%] before:transition-all before:duration-300 hover:before:bg-white hover:before:scale-x-[1] before:scale-x-[0]"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left mb-8">
          <h3 className="text-3xl font-semibold mb-4">Feedback</h3>
          <p className="text-sm text-gray-400 mb-2">DROP US A LINE</p>
          <a href="mailto:iampratappawar@gmail.com" className="relative inline-block text-blue-400 transition-colors duration-300 items-center justify-center md:justify-start before:absolute before:left-[50%] before:-bottom-[1px] before:w-full before:h-[2px] before:bg-transparent before:transform before:-translate-x-[50%] before:transition-all before:duration-300 hover:before:bg-blue-400 hover:before:scale-x-[1] before:scale-x-[0]">iampratappawar@gmail.com</a><br/>
          <a href="mailto:devcode.community@gmail.com" className="relative inline-block text-blue-400 transition-colors duration-300 items-center justify-center md:justify-start before:absolute before:left-[50%] before:-bottom-[1px] before:w-full before:h-[2px] before:bg-transparent before:transform before:-translate-x-[50%] before:transition-all before:duration-300 hover:before:bg-blue-400 hover:before:scale-x-[1] before:scale-x-[0]">devcode.community@gmail.com</a>
        </div>
      </div>

      {/* Image Section for the Logos */}
      <div className="max-w-6xl mx-auto flex justify-center md:justify-between items-center space-x-6 mt-8">
        {/* Logo with Animation */}
        {[
          { src: "/images/logos/logo-no-background.png", alt: "Dev Code Logo", link: "https://devcode-technexus.vercel.app" },
          { src: "/images/logos/DevCode-without-BG.png", alt: "TechNexus Logo", link: "https://dev-code-community.github.io/bio/" }
        ].map(({ src, alt, link }) => (
          <a key={alt} href={link} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 transform hover:scale-110">
            <img
              src={src}
              alt={alt}
              className="h-12 md:h-16 lg:h-20 object-contain max-h-24"
            />
          </a>
        ))}
      </div>

      {/* Horizontal Divider */}
      <hr className="border-t border-gray-600 mt-12 mb-4" />

      {/* Footer Bottom Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-lg text-gray-400 text-center md:text-left">
        {/* Copyright */}
        <p className="mb-4 md:mb-0">© 2024 Dev Code & TechNexus | Made with ♥️</p>

        {/* Footer Links */}
        <div className="flex space-x-6 justify-center md:justify-start text-base">
          <a href="#" className="hover:text-white transition-colors duration=300">Terms and Conditions</a>
          <a href="#" className="hover:text-white transition-colors duration=300">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration=300">Guidelines</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;