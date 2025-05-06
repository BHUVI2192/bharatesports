
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile, useDeviceType } from "@/hooks/use-mobile";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const deviceType = useDeviceType();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
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

  // Navigation links - removed "Live Updates"
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/news", label: "News" },
    { path: "/accessories", label: "Accessories" },
    { path: "/about", label: "About" },
  ];

  // Check if link is active
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy-950" : "bg-navy-950"
      } border-b border-blue-500/20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo area */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className={`font-bold text-white ${isMobile ? 'text-lg' : 'text-2xl'}`}>
                <span className="text-blue-500">BHARAT</span>
                <span className="text-white">ESPORT</span>
              </span>
            </Link>
          </div>

          {/* Always show horizontal tabs for desktop */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center space-x-8 mx-auto">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors duration-200 ${
                    isActive(item.path) 
                      ? "text-blue-400" 
                      : "text-gray-300 hover:text-blue-400"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-400 hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6 text-blue-400" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - horizontal tabs at the top */}
      <div className={`md:hidden transform transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 py-2 bg-navy-950 flex flex-row overflow-x-auto justify-start gap-4 whitespace-nowrap">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 text-base font-medium ${
                isActive(item.path)
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-300"
              }`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
