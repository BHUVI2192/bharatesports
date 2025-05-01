
import React, { useEffect, useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { Gamepad } from "lucide-react";
import { useDeviceType } from "@/hooks/use-mobile";

const Hero = () => {
  // Gaming/esports themed images
  const images = [
    {
      url: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=2940&auto=format&fit=crop",
      title: "Professional Esports Arena"
    },
    {
      url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop",
      title: "Gaming Setup"
    },
    {
      url: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2940&auto=format&fit=crop",
      title: "Esports Tournament"
    },
    {
      url: "https://images.unsplash.com/photo-1593277992013-05e17a5f417d?q=80&w=2770&auto=format&fit=crop",
      title: "Gaming Controllers"
    },
    {
      url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2942&auto=format&fit=crop",
      title: "Gaming Community"
    }
  ];

  const [api, setApi] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';
  
  // Auto-rotate carousel
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
    
    return () => {
      clearInterval(interval);
      api.off("select");
    };
  }, [api]);

  return (
    <div className="relative min-h-[92vh] overflow-hidden">
      {/* Full-screen carousel background - same for both mobile and desktop */}
      <div className="absolute inset-0 z-0">
        <Carousel className="w-full h-full" opts={{ loop: true, duration: 50 }} setApi={setApi}>
          <CarouselContent className="h-full">
            {images.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="w-full h-full">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Dark overlay - consistent between mobile and desktop */}
        <div className="absolute inset-0 bg-navy-950/80 z-10">
          {!isMobile && (
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTI1MjkiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnpNMzYgMThjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnpNMzYgMmMwLTEuMS45LTIgMi0yIDEuMSAwIDIgLjkgMiAyIDAgMS4xLS45IDItMiAyLTEuMSAwLTItLjktMi0yem0tMTYgMGMwLTEuMS45LTIgMi0yIDEuMSAwIDIgLjkgMiAyIDAgMS4xLS45IDItMiAyLTEuMSAwLTItLjktMi0yem0tMTYgMGMwLTEuMS45LTIgMi0yIDEuMSAwIDIgLjkgMiAyIDAgMS4xLS45IDItMiAyLTEuMSAwLTItLjktMi0yeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
          )}
        </div>
      </div>
      
      {/* Content - Consistent between mobile and desktop */}
      <div className="container-custom pt-16 md:pt-24 lg:pt-32 pb-16 relative z-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="space-y-5 md:space-y-8 animate-fade-in">
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/4ce209e6-a051-4f8f-8d93-b1cb7c888568.png" 
                alt="Bharat Esport Express Logo" 
                className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
              />
            </div>
            
            {/* Made consistent for both mobile and desktop */}
            <h1 className="font-bold tracking-tight text-4xl md:text-5xl lg:text-7xl mt-2 md:mt-0">
              <span className="block text-white mb-1 md:mb-2 animate-fade-in drop-shadow-md" style={{ animationDelay: "0.2s" }}>BHARAT</span>
              <span className="block text-blue-500 animate-fade-in drop-shadow-md" style={{ animationDelay: "0.4s" }}>ESPORT EXPRESS</span>
            </h1>
            
            {/* Ensure consistent styling for both mobile and desktop */}
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in bg-navy-950/80 p-2 md:p-4 rounded-lg" style={{ animationDelay: "0.6s" }}>
              Join India's Ultimate Gaming Arena - Where champions are born and legends rise.
            </p>
            
            {/* Image indicator dots */}
            <div className="flex justify-center gap-1.5 md:gap-2 mt-3 md:mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 md:h-3 rounded-full transition-all ${
                    currentIndex === index ? "bg-blue-500 w-5 md:w-8" : "bg-white/50 w-2 md:w-3"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-10 md:mt-16 lg:mt-28 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-3">
          {[
            { 
              title: "Latest Updates", 
              description: "Stay informed with the latest esports news and updates", 
              delay: "1.0s" 
            },
            { 
              title: "Premium Accessories", 
              description: "Enhance your gaming experience with our quality gear", 
              delay: "1.2s" 
            },
            { 
              title: "Community Events", 
              description: "Join tournaments and connect with fellow gamers", 
              delay: "1.4s" 
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-navy-800/80 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: item.delay }}
            >
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 md:mt-16 text-center animate-fade-in" style={{ animationDelay: "1.6s" }}>
          <a 
            href="#news" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            Scroll down to discover more
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 md:h-5 md:w-5 ml-1 animate-bounce" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10 3a1 1 0 00-1 1v10.586l-3.293-3.293a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414L11 14.586V4a1 1 0 00-1-1z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
