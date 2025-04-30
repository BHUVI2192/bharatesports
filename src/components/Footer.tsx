
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-navy-900 py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTI1MjkiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnpNMzYgMThjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnpNMzYgMmMwLTEuMS45LTIgMi0yIDEuMSAwIDIgLjkgMiAyIDAgMS4xLS45IDItMiAyLTEuMSAwLTItLjktMi0yem0tMTYgMGMwLTEuMS45LTIgMi0yIDEuMSAwIDIgLjkgMiAyIDAgMS4xLS45IDItMiAyLTEuMSAwLTItLjktMi0yem0tMTYgMGMwLTEuMS45LTIgMi0yIDEuMSAwIDIgLjkgMiAyIDAgMS4xLS45IDItMiAyLTEuMSAwLTItLjktMi0yeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/4ce209e6-a051-4f8f-8d93-b1cb7c888568.png" 
                alt="Bharat Esport Express Logo" 
                className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} mr-2`}
              />
              <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-white`}>
                Bharat Esport Express
              </h2>
            </div>
            <p className="text-gray-400 max-w-md text-sm md:text-base">
              India's premier gaming community, dedicated to elevating the esports ecosystem through tournaments, content creation, and professional player development.
            </p>
          </div>

          <div>
            <h3 className="text-blue-500 text-base md:text-lg font-semibold mb-3 md:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors text-sm md:text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="text-gray-400 hover:text-blue-500 transition-colors text-sm md:text-base"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="#accessories"
                  className="text-gray-400 hover:text-blue-500 transition-colors text-sm md:text-base"
                >
                  Accessories
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-blue-500 transition-colors text-sm md:text-base"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-500 text-base md:text-lg font-semibold mb-3 md:mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm md:text-base">
                <span className="text-blue-400">Email:</span> bharatesports.bgmi@gmail.com
              </li>
              <li className="text-gray-400 text-sm md:text-base">
                <span className="text-blue-400">Instagram:</span>{" "}
                @bharat_esp0rts
              </li>
              <li className="text-gray-400 text-sm md:text-base">
                <span className="text-blue-400">YouTube:</span> Bharat Esports Xpress
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8 mt-6 md:mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Bharat Esport Express. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-xs md:text-sm">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-xs md:text-sm">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
