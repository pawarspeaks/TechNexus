import React from "react";
import {
  Instagram,
  Linkedin,
  Github,
  Twitter,
  MessageCircle,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-3">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 transition-all duration-300 hover:text-gray-300">
            Unlock Exclusive Updates!
          </h2>
          <div className="flex justify-center md:justify-start items-center bg-[#1c1c3d] rounded-full border border-gray-500 px-3 py-3">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent text-lg text-white placeholder-gray-400 w-full focus:outline-none pr-6"
            />
            <button className="bg-white text-black rounded-full p-2 transition-transform duration-300 transform hover:scale-125 hover:bg-[#24246a] hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.5 5.25L18 8M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-3xl font-semibold mb-4">Follow Us</h3>
          <p className="text-gray-400 mb-5">
            Stay connected with us on social media:
          </p>
          <div className="flex justify-center md:justify-start space-x-3">
            {[
              {
                icon: Instagram,
                name: "Instagram",
                link: "https://www.instagram.com/devcode.community/",
              },
              {
                icon: Linkedin,
                name: "LinkedIn",
                link: "https://www.linkedin.com/company/dev-code-community/",
              },
              {
                icon: Github,
                name: "GitHub",
                link: "https://github.com/Dev-Code-Community",
              },
              {
                icon: Twitter,
                name: "Twitter",
                link: "https://x.com/_DEVCODE_",
              },
              {
                icon: MessageCircle,
                name: "WhatsApp",
                link: "https://chat.whatsapp.com/F2njAIyHZzyEoE8BP75crT",
              },
              {
                icon: Send,
                name: "Telegram",
                link: "https://t.me/DevCodeCommunity",
              },
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

        <div className="text-center md:text-left">
          <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400 mb-4">Drop us a line at:</p>
          <a
            href="mailto:iampratappawar@gmail.com"
            className="block text-blue-400 transition-colors duration-300 hover:text-white"
          >
            iampratappawar@gmail.com
          </a>
          <a
            href="mailto:devcode.community@gmail.com"
            className="block text-blue-400 transition-colors duration-300 hover:text-white"
          >
            devcode.community@gmail.com
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex justify-center md:justify-between items-center space-x-6 mt-12">
        {[
          {
            src: "/images/logos/logo-no-background.png",
            alt: "Dev Code Logo",
            link: "https://devcode-technexus.vercel.app",
          },
          {
            src: "/images/logos/DevCode-without-BG.png",
            alt: "TechNexus Logo",
            link: "https://dev-code-community.github.io/bio/",
          },
        ].map(({ src, alt, link }) => (
          <a
            key={alt}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 transform hover:scale-110"
          >
            <img
              src={src}
              alt={alt}
              className="h-12 md:h-16 lg:h-20 object-contain max-h-24"
            />
          </a>
        ))}
      </div>

      <hr className="border-t border-gray-600 mt-12 mb-4" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-md text-gray-400 text-center md:text-left">
        <p className="mb-4 md:mb-0">
          © 2024 Dev Code & TechNexus | Made with ♥️
        </p>

        <div className="flex space-x-6 justify-center md:justify-start text-base">
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Terms and Conditions
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Guidelines
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
