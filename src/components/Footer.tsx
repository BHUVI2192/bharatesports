
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-cyber-darker py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[size:30px_30px] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-pixel text-2xl font-bold mb-4">
              <span className="text-neon-pink">NEON</span>
              <span className="text-neon-blue">ARENA</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              The ultimate destination for cyberpunk gaming experiences. Immerse
              yourself in neon-drenched worlds and compete in thrilling challenges.
            </p>
          </div>

          <div>
            <h3 className="text-neon-blue text-lg font-cyber font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-neon-blue transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#games"
                  className="text-gray-400 hover:text-neon-pink transition-colors"
                >
                  Games
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="text-gray-400 hover:text-neon-green transition-colors"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-neon-yellow transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-neon-pink text-lg font-cyber font-semibold mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="text-neon-blue">Email:</span> info@neonarena.com
              </li>
              <li className="text-gray-400">
                <span className="text-neon-pink">Support:</span>{" "}
                support@neonarena.com
              </li>
              <li className="text-gray-400">
                <span className="text-neon-green">Press:</span> press@neonarena.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 Neon Arena. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-green transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
