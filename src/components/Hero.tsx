
import React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { Images } from "lucide-react";

const Hero = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      title: "Gaming Technology"
    },
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      title: "Esports Setup"
    },
    {
      url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      title: "Tournament Experience"
    }
  ];

  return (
    <div className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-navy-900 to-navy-950">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTI1MjkiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnpNMzYgMThjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnpNMzYgMmMwLTEuMS45LTIgMi0yIDEuMSAwIDIgLjkgMiAyIDAgMS4xLS45IDItMiAyLTEuMSAwLTItLjktMi0yem0tMTYgMGMwLTEuMS45LTIgMi0yIDEuMSAwIDIgLjkgMiAyIDAgMS4xLS45IDItMiAyLTEuMSAwLTItLjktMi0yem0tMTYgMGMwLTEuMS45LTIgMi0yIDEuMSAwIDIgLjkgMiAyIDAgMS4xLS45IDItMiAyLTEuMSAwLTItLjktMi0yeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] opacity-10 z-0"></div>
      
      <div className="container-custom pt-24 pb-16 relative z-10">
        <div className="text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div className="animate-fade-in">
              <img 
                src="/lovable-uploads/4ce209e6-a051-4f8f-8d93-b1cb7c888568.png" 
                alt="Bharat Esport Express Logo" 
                className="w-32 h-32 object-contain"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block text-white mb-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>BHARAT</span>
              <span className="block text-blue-500 animate-fade-in" style={{ animationDelay: "0.4s" }}>ESPORT EXPRESS</span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-lg mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              Join India's Ultimate Gaming Arena - Where champions are born and legends rise.
            </p>
          </div>
          
          <div className="hidden md:block animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index} className="pl-4">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent z-10"></div>
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                          <p className="font-medium flex items-center gap-2">
                            <Images className="w-4 h-4" />
                            {image.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end mt-2 gap-2">
                <CarouselPrevious className="relative inset-0 translate-y-0 left-0 right-auto" />
                <CarouselNext className="relative inset-0 translate-y-0 right-0" />
              </div>
            </Carousel>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
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
              className="bg-navy-800/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: item.delay }}
            >
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "1.6s" }}>
          <a 
            href="#news" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            Scroll down to discover more
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1 animate-bounce" 
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
