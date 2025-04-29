
import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-navy-900 to-navy-950">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTI1MjkiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnpNMzYgMThjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnpNMzYgMmMwLTEuMS45LTIgMi0yIDEuMSAwIDIgLjkgMiAyIDAgMS4xLS45IDItMiAyLTEuMSAwLTItLjktMi0yem0tMTYgMGMwLTEuMS45LTIgMi0yIDEuMSAwIDIgLjkgMiAyIDAgMS4xLS45IDItMiAyLTEuMSAwLTItLjktMi0yem0tMTYgMGMwLTEuMS45LTIgMi0yIDEuMSAwIDIgLjkgMiAyIDAgMS4xLS45IDItMiAyLTEuMSAwLTItLjktMi0yeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] opacity-10 z-0"></div>
      
      <div className="container-custom pt-24 pb-16 relative z-10">
        <div className="text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div>
              <img 
                src="/lovable-uploads/4ce209e6-a051-4f8f-8d93-b1cb7c888568.png" 
                alt="Bharat Esport Express Logo" 
                className="w-32 h-32 object-contain"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block text-white mb-2">BHARAT</span>
              <span className="block text-blue-500">ESPORT EXPRESS</span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
              Join India's Ultimate Gaming Arena - Where champions are born and legends rise.
            </p>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="bg-navy-800 rounded-lg overflow-hidden aspect-video relative shadow-soft border border-navy-700">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900/80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-blue-400 text-sm uppercase font-medium tracking-wider">Featured</span>
                <h3 className="text-white text-xl font-bold mt-1">Competitive Gameplay</h3>
              </div>
              <div className="bg-navy-800 w-full h-full flex items-center justify-center">
                <div className="p-4 rounded-full bg-blue-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
