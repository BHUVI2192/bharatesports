
import React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { Images, Trophy } from "lucide-react";

const Hero = () => {
  // Updated carousel images with popular esports teams and events
  const images = [
    {
      url: "https://static.toiimg.com/photo/106615239.cms",
      title: "Team Versatile - BGIS Champions"
    },
    {
      url: "https://www.insidesport.in/wp-content/uploads/2024/03/GODLIKE.jpg?w=690",
      title: "Team GodLike Esports"
    },
    {
      url: "https://staticg.sportskeeda.com/editor/2023/05/36c6a-16830097756092-1920.jpg",
      title: "Team Soul - Top Indian Esports Team"
    },
    {
      url: "https://img.pikbest.com/origin/09/37/37/85ZpIkbEsTyVf.jpg!w700wp",
      title: "Esports World Cup"
    },
    {
      url: "https://i0.wp.com/thebridge.in/wp-content/uploads/2023/03/FqUatG6aQAECZpo-1-e1679638211512.jpg",
      title: "BGIS Tournament Action"
    }
  ];

  const featuredTeams = [
    {
      name: "Team Versatile",
      achievement: "BGIS 2024 Champions",
      description: "The rising stars of Indian esports"
    },
    {
      name: "GodLike Esports",
      achievement: "Premier Esports Organization",
      description: "One of India's dominant competitive teams"
    },
    {
      name: "Team Soul",
      achievement: "Multiple Tournament Winners",
      description: "Legendary team with loyal fanbase"
    }
  ];

  return (
    <div className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-navy-900 to-navy-950">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTI1MjkiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnpNMzYgMThjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnpNMzYgMmMwLTEuMS45LTIgMi0yIDEuMSAwIDIgLjkgMiAyIDAgMS4xLS45IDItMiAyLTEuMSAwLTItLjktMi0yem0tMTYgMGMwLTEuMS45LTIgMi0yIDEuMSAwIDIgLjkgMiAyIDAgMS4xLS45IDItMiAyLTEuMSAwLTItLjktMi0yem0tMTYgMGMwLTEuMS45LTIgMi0yIDEuMSAwIDIgLjkgMiAyIDAgMS4xLS45IDItMiAyLTEuMSAwLTItLjktMi0yeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] opacity-10 z-0"></div>
      
      {/* Full-width image carousel */}
      <div className="absolute inset-0 w-full overflow-hidden">
        <Carousel className="w-full" opts={{ loop: true, duration: 50 }} autoplay={true}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="relative h-[90vh] w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent z-10"></div>
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-20 left-0 right-0 text-white z-20 container-custom">
                  <p className="font-medium text-lg md:text-xl flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-neon-pink" />
                    {image.title}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute z-30 bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <CarouselPrevious className="relative inset-0 translate-y-0 left-0 right-auto bg-white/10 backdrop-blur-sm hover:bg-white/20" />
            <CarouselNext className="relative inset-0 translate-y-0 right-0 bg-white/10 backdrop-blur-sm hover:bg-white/20" />
          </div>
        </Carousel>
      </div>
      
      <div className="container-custom pt-24 pb-16 relative z-10">
        <div className="text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 flex flex-col items-center md:items-start backdrop-blur-sm bg-navy-950/50 p-6 rounded-lg border border-blue-500/20">
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
            <div className="backdrop-blur-sm bg-navy-950/50 p-6 rounded-lg border border-blue-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Trophy className="w-6 h-6 mr-2 text-neon-pink" /> Featured Teams
              </h2>
              <div className="space-y-4">
                {featuredTeams.map((team, index) => (
                  <div 
                    key={index} 
                    className="p-4 border border-blue-500/20 rounded-lg hover:border-blue-500/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-white">{team.name}</h3>
                    <p className="text-blue-400">{team.achievement}</p>
                    <p className="text-gray-300 text-sm mt-2">{team.description}</p>
                  </div>
                ))}
              </div>
            </div>
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
