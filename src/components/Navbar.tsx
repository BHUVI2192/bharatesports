
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-cyber-darker/80 backdrop-blur-md border-b border-neon-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white font-pixel">
                <span className="text-neon-pink">BHARAT</span>
                <span className="text-neon-blue">ESPORTSEXPRESS</span>
              </span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="#"
                className="text-neon-blue hover:text-white transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#accessories"
                className="text-gray-300 hover:text-neon-pink transition-colors duration-200"
              >
                Accessories
              </a>
              <a
                href="#news"
                className="text-gray-300 hover:text-neon-green transition-colors duration-200"
              >
                News
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-neon-yellow transition-colors duration-200"
              >
                About
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-neon-blue hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6 text-neon-pink" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cyber-darker/95 backdrop-blur-md">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-neon-blue hover:bg-gray-900"
            >
              Home
            </a>
            <a
              href="#accessories"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-neon-pink"
            >
              Accessories
            </a>
            <a
              href="#news"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-neon-green"
            >
              News
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-900 hover:text-neon-yellow"
            >
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
