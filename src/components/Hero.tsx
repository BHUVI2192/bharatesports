
import React from "react";
import { useDeviceType } from "@/hooks/use-mobile";

const Hero = () => {
  // Gaming/esports themed background image
  const backgroundImage = "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=2940&auto=format&fit=crop";
  
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';

  return (
    <div className="relative min-h-[92vh] overflow-hidden">
      {/* Simple background image - no effects */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full">
          <img 
            src={backgroundImage} 
            alt="Esports Arena"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Simple dark overlay without blur */}
        <div className="absolute inset-0 bg-navy-950/80 z-10"></div>
      </div>
      
      {/* Simplified content - just the app name */}
      <div className={`container-custom ${isMobile ? 'pt-28' : 'pt-16 md:pt-24 lg:pt-32'} pb-16 relative z-20`}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="space-y-5 md:space-y-8 animate-fade-in">
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/4ce209e6-a051-4f8f-8d93-b1cb7c888568.png" 
                alt="Bharat Esport Express Logo" 
                className={`${isMobile ? 'w-16 h-16' : 'w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32'} object-contain`}
              />
            </div>
            
            {/* App name with optimized mobile styling */}
            <h1 className={`font-bold tracking-tight ${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-7xl'} mt-2 md:mt-0`}>
              <span className="block text-white mb-1 md:mb-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>BHARAT</span>
              <span className="block text-blue-500 animate-fade-in" style={{ animationDelay: "0.4s" }}>ESPORT EXPRESS</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
