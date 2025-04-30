
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Add scroll event listener to change navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy-950/90 shadow-md" : "bg-transparent"
      } backdrop-blur-md border-b border-neon-blue/20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <span className={`font-bold text-white font-pixel ${isMobile ? 'text-xl' : 'text-2xl'}`}>
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
      <div className={`md:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-navy-950/95 backdrop-blur-md">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-neon-blue hover:bg-navy-900"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#accessories"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-navy-900 hover:text-neon-pink"
            onClick={() => setIsOpen(false)}
          >
            Accessories
          </a>
          <a
            href="#news"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-navy-900 hover:text-neon-green"
            onClick={() => setIsOpen(false)}
          >
            News
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-navy-900 hover:text-neon-yellow"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
